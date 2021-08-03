components.requestForm = function(state){
    // localhost:8080/api/v1/categories/helpRequest
    console.log(state);
    return /*html*/ `
    <div class = "items">
        <div class = "item dpView expanded">
            <div class = "dp">
                <img src = "${me.dpLocation}" />
            </div>
            <div class = "details">

                <form>
                    <input class = "input title" name = "title" type = "text" placeholder="Your Title goes Here"/>
                    <div class = "bar">
                        <div class = "elem half group" data-group = "helpCategory">
                            <select name = "id" data-bind = "helpCategory" 
                            onChange = "components.requestForm.methods.categoryChange(this, event)">
                                <option disabled selected class = "default">Choose Category</option>
                                ${state.categories.map(
                                    item => `<option value = "${item.id}">${item.name}</option>`
                                ).join(" ")}
                            </select>
                        </div>
                        <div class = "elem half amount" >
                            <input type = "text" name = "amount" placeholder = "Amount(if need any)"/>
                        </div>
                        <div class = "elem half bloodGroup group" data-group="bloodGroup" style = "display : none">
                            <select name = "bloodgroup">
                                ${state.groups.map( e => {
                                    return /*html*/`<option value = "${e.bloodgroup}">${e.bloodgroup}</option>`
                                }).join(" ")}
                            </select>
                        </div>
                    </div>
                    <div class = "elem">
                        <textarea name = "description" placeholder="Please put your description here. Mention the issue in details."></textarea>
                    </div>

                    <div class = "bar colap">

                        <div class = "elem half group" data-group = "contact" data-action = "auto_contact">
                            <h5>Contact Details: </h5>
                            <div class = "elem">
                                <input name = "contactName" type = "text title" placeholder="Name to contact"/>
                            </div>
                            <div class = "elem">
                                <input name = "phoneNo" type = "text" placeholder="Phone No"/>                                    
                            </div>
                            <div class = "group" data-group = "area">
                                <div class = "elem">
                                    <select name = "name" class = "ignore" data-bind = "district">
                                        <option selected disabled class = "default">Choose District</option>
                                    </select>
                                </div>
                                <div class = "elem">
                                    <select  name = "id" data-bind = "area">
                                        <option selected disabled class = "default">Choose Area</option>
                                    </select>
                                </div>
                            </div>

                            <div class = "elem">
                                <input type = "text" name = "address" placeholder="Address"/>
                            </div>
                        </div>

                        <div class = "elem half group" data-group = "guardianContact" data-action = "auto_contact">
                            <h5>Contact Details: </h5>
                            <div class = "elem">
                                <input name = "contactName" type = "text title" placeholder="Name to contact"/>
                            </div>
                            <div class = "elem">
                                <input name = "phoneNo" type = "text" placeholder="Phone No"/>                                    
                            </div>
                            <div class = "group" data-group = "area">
                                <div class = "elem">
                                    <select name = "name" class = "ignore" data-bind = "district">
                                        <option selected disabled class = "default">Choose District</option>
                                    </select>
                                </div>
                                <div class = "elem">
                                    <select  name = "id" data-bind = "area">
                                        <option selected disabled class = "default">Choose Area</option>
                                    </select>
                                </div>
                            </div>

                            <div class = "elem">
                                <input type = "text" name = "address" placeholder="Address"/>
                            </div>
                        </div>

                    </div>

                    <div class = "elem colap ignore attachments">
                        <h5>Attachments :</h5>
                        <div class = "elem">
                            <input type = "file" value="Browse your file"/>
                        </div>
                    </div>
                    <div class = "bar colap to-right">
                        <div class = "elem">
                            <div class = "loader" style = "display : none"></div>                        
                        </div>
                        <div class = "elem">
                            <input type = "submit" 
                            value = "submit" class = "button solid white small" 
                            onclick="components.requestForm.methods.submit(this, event)" />
                        </div>
                    </div>
                </form>

            </div>
        </div>
    </div>
    `
}

components.requestForm.methods = {
    submit : function(me, event){
        let selector = $(me).closest("form");
        event.preventDefault();
        let data = parseForm(selector);
        console.log(data);

        selector.find(".loader").show(300);

        let formData = getFileFormData(selector.find(".attachments input[type='file']"), data);
        if(selector.hasClass("bloodDonation")){
            ajaxPostUpload('bloodDonation', formData,() => {
                selector.find(".loader").hide(300);
                console.log("Upload successful");
                window.location.href = "/user/requests";
            })
        }else{
            ajaxPostUpload('user/helpRequests', formData,() => {
                selector.find(".loader").hide(300);                
                console.log("Upload successful");
                window.location.href = "/user/requests";                
            })
        }
    },
    categoryChange: function(me, event){
        let id = $(me).val();
        let value = $(me).find("option[value=" + id + "]").html();
        let selector = $(me).closest("form");
        let form = $(me).closest("form");
        if(value.toUpperCase().includes("BLOOD")){
            selector.find(".amount").hide();
            selector.find(".bloodGroup").show();
            form.addClass("bloodDonation");
        }else{
            selector.find(".amount").show();
            selector.find(".bloodGroup").hide();
            form.removeClass("bloodDonation");            
        }
    }
}