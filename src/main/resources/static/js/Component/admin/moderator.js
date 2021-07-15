
components.moderator = function(state){
    
    return /*html*/`
    <div class = "item dpView collapsed" data-storage = '${JSON.stringify(state)}'>
        <div class = "dp">
            <img src = "${state.dpLocation}" />
        </div>
        <div class = "details">
            <h4>
                ${state.name}
            </h4>
            <div class = "bar">
                <h6>Email: ${state.email}</h6>
                <h6>Phone No: ${state.contact ? state.contact.phoneNo : ''}</h6>
            </div>
            <!-- <div class = "para small">
                Deescription
            </div> -->
            <div class = "bar">
                <h5 class = "dash">UserID: ${state.id}</h5>
                <a href = "#" class = "button solid small white exp" 
                onClick = "components.moderator.methods.changeStatus(this, event)">
                    ${state.disabled? "Enable": "Disable"} Moderator
                </a>
            </div>

        </div>
    </div> 

    `    
}
components.moderator.methods = {
    changeStatus : async function(selector, e){
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
