
components.addModerator = function(state){
    
    return /*html*/`
    <div class = "item dpView collapsed" data-storage = '${JSON.stringify(state)}'>
        <div class = "dp">
            <img src = "${state.dpLocation}" />
        </div>
        <div class = "details">
            
        </div>
    </div> 

    `    
}
components.addModerator.methods = {
    changeStatus : function(selector, e){
        e.preventDefault();
        let data = $(selector).closest(".item").attr("data-storage");
        data = JSON.parse(data);
        console.log(data);
        await ajaxPut('admin/userState?id=' + data.id, {}, function(res){
        });
        location.reload(true);
        return false;        
    }
}
