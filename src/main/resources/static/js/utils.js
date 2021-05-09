var apiRoot = "/api/v1/";


function ajaxGet(url, success){
    $.ajax({
        url: apiRoot + url, 
        success: success
    });
}

function replaceNulls(json){
    data = JSON.parse(JSON.stringify(json).replace(/\:null/gi, "\:\"\""));
    return data;
}

$(document).ready(function(){
    $("body").on("click", "[data-action = 'toggleDpView']", function(){
        $(this).closest(".item.dpView").toggleClass("collapsed");
        $(this).closest(".item.dpView").toggleClass("expanded");
    })
})
