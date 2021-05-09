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