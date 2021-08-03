var apiRoot = "/api/v1/";

var me = {};

var pageSize = 5;

var components = [];

$(document).ready(function(){
    ajaxGet("auth/me", (res)=> {
        me = res;
        console.log(me, "MY INFO");
        var selector = $("nav .user-nav .settings");        
        if(!me.email){
            $("nav .user-nav .log-reg").removeClass("hide-It");
        }else{
            selector.removeClass("hide-It");
            selector.find(".dp img").attr("src", res.dpLocation);
            $("nav .user-nav .log-reg").addClass("hide-It");
            if(res.userType){
                if(res.userType.toUpperCase() == "MODERATOR"){
                    selector.find(".for-moderator").show();
                }else if(res.userType.toUpperCase() == "USER"){
                    selector.find(".for-user").show();                    
                }
            }
        }
    });

    $("nav").on("click", ".settings", ()=>{
        $(this).find(".dropdown").toggleClass("hide-It");
    })

    bindContactForms($('body'));
    bindBloodGroup($('body'));
    bindCategories($('body'));

    $("body").on("click", "[data-action = 'toggleDpView']", function(e){
        e.preventDefault();
        $(this).closest(".item.dpView").toggleClass("collapsed");
        $(this).closest(".item.dpView").toggleClass("expanded");
    })


    $("body").on("change", ".attachments [type='file']" , function(){
        var attachment = $(this).closest(".attachments");
        if($(this)[0].files.length == 0){
            $(this).closest(".elem").remove();
        }
        if( attachment.find("input[type='file']").last()[0].files.length != 0 ){
            attachment.append(/*html*/`
            <div class = "elem">
                <input type = "file" value="Browse your file"/>
            </div>            
            `);
        }
    })
})
