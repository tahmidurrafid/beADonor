components.addMedia = function(state){
    return /*html*/`
    <div class = "item dpView expanded">
        <div class = "details">
            <form>
                <input class = "input title" name = "title" type = "text" placeholder="Your Title goes Here"/>
                <div class = "elem">
                    <textarea name = "description" placeholder="Please put your description here. Mention the issue in details."></textarea>
                </div>
                <div class = "attachment">
                    <input type = "file"/>
                </div>
                <div class = "bar colap">
                    <div class = "elem"></div>
                    <div class = "elem">
                        <input type = "submit" class = "button solid white small" value = "Upload" 
                        onclick="components.addMedia.methods.submit(this, event)" />
                    </div>
                </div>                        
            </form>
        </div>
    </div>
    `
}


components.addMedia.methods = {
    submit : async function(selector, e){
        e.preventDefault();
        let form  = $(selector).closest("form");
        var data = parseForm(form);
        let formData = getFileFormData(form.find(".attachment input"), data);

        await ajaxPostUpload('admin/gallery', formData);
        window.location.href = "/admin/gallery";
        console.log("Reached");
        return false;
    }
}