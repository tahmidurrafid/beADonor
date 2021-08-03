components.infoForm = function(state){
    return /*html*/ `
    <div class = "items">
        <div class = "item dpView expanded">
            <div class = "dp">
                <img src = "${me.dpLocation}" />
            </div>
            <div class = "details">
                <form>
                    <input name = "title" class = "input title" type = "text" placeholder="Your Title goes Here"/>
                    <div class = "bar">
                        <div class = "elem half group" data-group = "category">
                            <select name = "id">
                                <option disabled selected>Select Category</option>
                                ${state.categories.map(  item => 
                                    `<option value = "${item.id}">${item.name}</option>`
                                ).join("")}
                            </select>
                        </div>
                        <div class = "elem half">
                            <input type = "input" placeholder="Mention Other Category"/>
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
                
                        <div class = "elem half">

                        </div>
                    </div>

                    <div class = "elem colap ignore attachments">
                        <h5>Attachments :</h5>
                        <div class = "elem">
                            <input type = "file" value="Browse your file"/>
                        </div>
                    </div>

                    <div class = "bar colap">
                        <div class = "elem"></div>
                        <div class = "elem">
                            <input type = "submit" class = "button solid white small" value = "Submit" 
                            onclick="submitForm(this, 'user/info', ()=> {window.location.href = '/user/info'})" />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
    `;
}