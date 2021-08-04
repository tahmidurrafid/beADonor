components.giftForm = function(state){
    return /*html*/ `
    <div class = "item dpView expanded">
        <div class = "dp">
            <img src = "${state.me.dpLocation}" />
        </div>
        <div class = "details">
            <form>
                <div class = "bar">
                    <div class = "elem half group" data-group = "giftCategory">
                        <select name = "id" value = "Choose Item">
                            <option selected disabled>Select Category (Available points: ${state.me.points})</option>
                            ${state.categories.map( (e) => 
                                /*html*/`<option ${state.me.points < e.points ? 'disabled ' : ' '} value = "${e.id}">${e.name} (${e.points} points)</option>`
                            ).join(" ")}
                        </select>
                    </div>
                    <div class = "elem half">
                        <input name = "size" type = "text" placeholder="Mention color, size etc."/>                                        
                    </div> 
                </div>

                <div class = "elem group" data-group = "contact" data-action = "auto_contact">
                    <h5>Shipping Address: </h5>
                    <div class = "bar">
                        <div class = "elem half">
                            <input name = "contactName" type = "text title" placeholder="Name to contact"/>
                        </div>
                        <div class = "elem half">
                            <input name = "phoneNo" type = "text" placeholder="Phone No"/>                                    
                        </div>
                    </div>
                    <div class = "bar group" data-group = "area">
                        <div class = "elem half">
                            <select name = "name" class = "ignore" data-bind = "district">
                                <option selected disabled class = "default">Choose District</option>
                            </select>
                        </div>
                        <div class = "elem half">
                            <select  name = "id" data-bind = "area">
                                <option selected disabled class = "default">Choose Area</option>
                            </select>
                        </div>
                    </div>

                    <div class = "elem">
                        <input type = "text" name = "address" placeholder="Address"/>
                    </div>
                </div>
                <div class = "bar">
                    <div class = "elem error">
                    </div>
                </div>

                <div class = "bar colap to-right">
                    <div class = "elem">
                        <div class = "loader" style = "display : none"></div>
                    </div>
                    <div class = "elem">
                        <button type = "submit" class = "button solid white small" 
                            onClick = "components.giftForm.methods.submit(this, event)">
                            Submit
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </div>
    `;
}

components.giftForm.methods = {
    submit : function(selector, e){
        e.preventDefault();
        var data = parseForm($(selector).closest("form"));
        let form = $(selector).closest("form");
        form.find(".loader").show(300);
        ajaxPost('gifts', data, (res) => {
            form.find(".loader").hide(300);
            console.log(res);
            window.location.href = "/user/gifts";
        }, (err) => {
            if(err.responseJSON && err.responseJSON && err.responseJSON.message){
                form.find(".error").html(err.responseJSON.message.replaceAll("|", "<br/>"));
                form.find(".error").show();
                form.find(".loader").hide(300);                
            }
        })
    }
}