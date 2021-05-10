var apiRoot = "/api/v1/";

function ajaxGet(url, success){
    $.ajax({
        url: apiRoot + url, 
        success: success
    });
}

function ajaxPost(url, data, success){
    $.ajax({
        url: apiRoot + url, 
        type: 'POST',        
        data: JSON.stringify(data),
        contentType : 'application/json',
        dataType : 'json',
        success: success
    });
}

function ajaxPostUpload(url, data, success, error){
    // $.ajax({
    //     type: "POST",
    //     enctype: 'multipart/form-data',
    //     url: apiRoot + url,
    //     data: data,
    //     processData: false,
    //     contentType: false,
    //     cache: false,
    //     // beforeSend: setRequestHeader,
    //     success: success,
    //     error : error
    // });
    $.ajax({
        type: "POST",
        url: apiRoot + url,
        data: data,
        processData: false,
        contentType: false,
        cache: false,
        success: success,
    });    
}

function replaceNulls(json){
    data = JSON.parse(JSON.stringify(json).replace(/\:null/gi, "\:\"\""));
    return data;
}

function bindContactForms(parent){
    var contacts = parent.find("[data-action='auto_contact']");
    
    for(let i = 0; i < contacts.length; i++){
        bindContact(contacts.eq(i));        
    }

    function bindContact(contact){
        var districts = contact.find("[data-bind = 'district']");
        districts.find(":not('.default')").remove();
        $.ajax({
            url: apiRoot + "location/districts", 
            success: function(result){
                for(let i = 0; i < result.length; i++){
                    districts.append(/*html*/`
                        <option value = "${result[i].name}"> ${result[i].name} </option>
                    `
                    )
                }
            }
        });

        districts.on("change", function(e){
            var area = contact.find("[data-bind='area']");
            area.find(":not(.default)").remove();

            $.ajax({url: apiRoot + "location/districts/" + this.value + "/areas", success: function(result){
                for(let i = 0; i < result.length; i++){
                    area.append(/*html*/`
                        <option value = "${result[i].id}"> ${result[i].name} </option>
                    `
                    )
                }
            }});

        });

    }
}

function bindBloodGroup(parent){
    var group = parent.find("[data-bind='bloodGroup']");
    for(var i = 0; i < group.length; i++){
        bind(group.eq(i));
    }

    function bind(blood){
        blood.find(":not('.default')").remove();
        $.ajax({
            url: apiRoot + "static/bloodGroups/", 
            success: function(result){
                for(let i = 0; i < result.length; i++){
                    blood.append(/*html*/`
                        <option value = "${result[i].bloodgroup}"> ${result[i].bloodgroup} </option>
                    `
                    )
                }
            }
        });
    }
}

function bindCategories(parent){

    bindCategory("[data-bind='helpCategory']", "categories/helpRequest");

    function bindCategory(selector, url){
        var group = parent.find(selector);
        for(var i = 0; i < group.length; i++){
            bind(group.eq(i), url);
        }
    
        function bind(blood, url){
            blood.find(":not('.default')").remove();
            ajaxGet(url, (result) => {
                for(let i = 0; i < result.length; i++){
                    blood.append(/*html*/`
                        <option value = "${result[i].id}"> ${result[i].name} </option>
                    `
                    )
                }
            })
        }
    }
}

function submitForm(e, url){
    var form = $(e).closest("form");
    var response = dfs(form);

    console.log(JSON.stringify(response));
    console.log(response);

    var fileUpload = form.find(".attachments").length;

    var files = form.find(".attachments input[type='file']");
    var formData = new FormData(); 

    for(var i = 0; i < files.length; i++){
        for(var j = 0; j < files[i].files.length; j++){
            formData.append("files", files[i].files[j]);
        }
    }

    formData.append("request", new Blob([JSON.stringify(response)] , {
        type : 'application/json'
    }) );

    if(fileUpload){
        ajaxPostUpload(url, formData, 
            ()=>{console.log("upload hosie")} ,
            ()=>{console.log("upload hoy nai")} );
    }else{
        ajaxPost(url, response, () => {console.log("Post Hoise")});
    }

    function dfs(form){
        var elems = form.children("*");
        var json = {};
        for(var i = 0; i < elems.length; i++){
            var elem = elems.eq(i);
            var res = dfs( elems.eq(i) );

            if(elem.is(".ignore")){
                continue;
            }else if(elem.is("input[type='checkbox']")){
                var value = elem.prop("checked");
                var name = elem.attr("name");
                if(value != null)
                    json[name] = value;                
            }else if(elem.is("input,textarea")){
                var value = elem.val();
                var name = elem.attr("name");
                if(value != null)
                    json[name] = value;
            }else if(elem.is("select")){
                var value = elem.val();
                var name = elem.attr("name");
                if(value != null)
                    json[name] = value;
            }else if(elem.is(".group")){
                var name = elem.attr("data-group");
                var tempRes = {};
                if(! jQuery.isEmptyObject(res)){
                    tempRes[name] = res;
                    res = tempRes;
                }
            }
            if(! jQuery.isEmptyObject(res)){
                for(var key in res){
                    json[key] = res[key];
                }
            }            
        }
        return json;
    }

    var setRequestHeader = function (xhr) {
        var token = $("meta[name='_csrf']").attr("content");
        var header = $("meta[name='_csrf_header']").attr("content");
    
        xhr.setRequestHeader(header, token);
    };

}