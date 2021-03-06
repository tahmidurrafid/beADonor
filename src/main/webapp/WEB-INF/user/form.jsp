<div class = "content">
    <div class = "tab">
        <a href = "#" class = "selected">Pending Review</a>
        <a href = "#">Marked</a>
        <a href = "#">On Going</a>
        <a href = "#">Archived</a>
    </div>
    <div class = "topic-content">
        <div class = "items">
            <div class = "item dpView expanded">
                <div class = "dp">
                    <img src = "/images/dp.png" />
                </div>
                <div class = "details">
                    <form>
                        <input class = "input title" name = "title" type = "text" placeholder="Your Title goes Here"/>
                        <div class = "bar">
                            <div class = "elem half group" data-group = "helpCategory">
                                <select name = "id" data-bind = "helpCategory">
                                    <option disabled selected class = "default">Choose Category</option>
                                </select>
                            </div>
                            <div class = "elem half" >
                                <input type = "text" name = "amount" placeholder = "Amount(if need any)"/>
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
                        <div class = "bar colap">
                            <div class = "elem"></div>
                            <div class = "elem">
                                <submit class = "button solid white small" onclick="submitForm(this, 'helpRequests')">
                                    Submit
                                </submit>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>