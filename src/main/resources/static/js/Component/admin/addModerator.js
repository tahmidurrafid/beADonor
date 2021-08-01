
components.addModerator = function(state){
    return /*html*/`
    <div class = "item dpView collapsed" data-storage = '${JSON.stringify(state)}'>
        <div class = "dp">
            <img src = "/images/profile-photo.png" />
        </div>
        <div class = "details">
            <form>
                <input type = "text" name = "email" placeholder = "Moderator Email"/>                
                <div class = "bar">
                    <div class = "elem half">
                        <input type = "password" name = "password" placeholder = "Choose password"/>
                    </div>
                    <div class = "elem half">
                        <input type = "password" name = "passwordC" placeholder = "Confirm password"/>
                    </div>
                </div>
                <div class = "bar">
                    <div class = "elem"></div>
                    <div class = "elem">
                        <input type = "submit" 
                        value = "Add" class = "button solid white small" 
                        onclick="components.addModerator.methods.submit(this, event)" />
                    </div>
                </div>
            </form>
        </div>
    </div> 
    `    
}

components.addModerator.methods = {
    submit : async function(selector, e){
        e.preventDefault();
        let data = $(selector).closest(".item").attr("data-storage");
        data = JSON.parse(data);
        var form = parseForm($(selector).closest("form"));
        console.log(form);
        await ajaxPost('admin/moderator', form, function(res){
        });
        window.location.href = "/admin/moderators";
        return false;
    }
}
