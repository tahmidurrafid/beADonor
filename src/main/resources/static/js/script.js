$(document).ready(function(){
    
    ajaxGet("auth/me", (res)=> {
        me = res;
        var selector = $("nav .user-nav .settings");        
        if(!me.name){
            $("nav .user-nav .log-reg").removeClass("hide-It");
        }else{
            selector.removeClass("hide-It");
            selector.find(".dp img").attr("src", res.dpLocation);
            // selector.find(".dp .name").html(res.name);
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
