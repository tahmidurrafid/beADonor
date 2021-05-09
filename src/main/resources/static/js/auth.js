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

function submitForm(e){
    var form = $(e).closest("form");
    var response = dfs(form);

    console.log(JSON.stringify(response));
    console.log(response);

    var setRequestHeader = function (xhr) {
        var token = $("meta[name='_csrf']").attr("content");
        var header = $("meta[name='_csrf_header']").attr("content");
    
        xhr.setRequestHeader(header, token);
    };

    $.ajax({
        url: apiRoot + "users/", 
        type: 'POST',        
        data: JSON.stringify(response),
        contentType : 'application/json',
        dataType : 'json',
        success: function(result){
            console.log(result, "hoise");
        }
    });

    function dfs(form){
        var elems = form.children("*");
        var json = {};
        for(var i = 0; i < elems.length; i++){
            var elem = elems.eq(i);
            var res = dfs( elems.eq(i) );            

            if(elem.is(".ignore")){
            }else if(elem.is("input[type='checkbox']")){
                var value = elem.prop("checked");
                var name = elem.attr("name");
                json[name] = value;                
            }else if(elem.is("input")){
                var value = elem.val();
                var name = elem.attr("name");
                json[name] = value;
            }else if(elem.is("select")){
                var value = elem.val();
                var name = elem.attr("name");
                json[name] = value;                
            }else if(elem.is(".group")){
                var name = elem.attr("data-group");
                var tempRes = {};
                tempRes[name] = res;
                res = tempRes;
            }
            if(! jQuery.isEmptyObject(res)){
                for(var key in res){
                    json[key] = res[key];
                }
            }            
        }
        return json;
    }
}

$(document).ready(function(){
    bindContactForms($('body'));
    bindBloodGroup($('body'));
})
