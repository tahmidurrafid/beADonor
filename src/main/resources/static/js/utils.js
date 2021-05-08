var apiRoot = "/api/v1/";


function ajaxGet(url, success){
    $.ajax({
        url: apiRoot + url, 
        success: success
    });
}