$(document).ready(function(){
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
