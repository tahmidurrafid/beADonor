var apiRoot = "/api/v1/"

    var districts = $("form").find("select[name='district']") ;


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
                for(let i = 0; i < result.areas.length; i++){
                    area.append(/*html*/`
                        <option value = "${result.areas[i].id}"> ${result.areas[i].name} </option>
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
                console.log(result);
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

$(document).ready(function(){
    bindContactForms($('body'));
    bindBloodGroup($('body'));
})
