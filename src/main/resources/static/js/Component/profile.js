components.profile = function(state){
    return /*html*/`
    <div class = "item">
        <div class = "profile" onLoad = "components.profile.methods.bindAll(this, event)">
            <div class = "left">
                <div class = "dp">
                    <input type = "file" id = "dpChange" 
                        onChange = "components.profile.methods.uploadPhoto(this, event)"/>
                        <div class = "cover">
                            <div class = "loader">
                            </div>
                            <!--<img src = "/images/icons/fi-rr-picture.svg" /> -->
                            <label for = "dpChange">
                                <div class = "icon">
                                    <i class = "fa fa-edit"></i>                        
                                </div>
                            </label>                            
                        </div>
                    <img class = "dp_img" src = ${state.dpLocation} />
                </div>
            </div>
            <div class = "form">
                <form>
                    <div class = "elem">
                        <input type = "text" name = "email" value="${state.email}" placeholder="Enter Email"/>
                    </div>
                    <div class = "elem">
                        <input type = "password" name = "password" value = "" placeholder="Your password"/>
                    </div>
                    <div class = "elem">
                        <input type = "text" name = "name" value = "${state.name ? state.name : ''}" placeholder="Full Name"/>
                    </div>
                    <div class = "line">
                        <div class = "elem half">
                            <input type = "text" name = "birthDate" value = "${state.birthDate? state.birthDate : ''}" placeholder="Choose Borthdate" />
                        </div>
                        <div class = "elem half">
                            <div class = "group" data-group = "bloodGroup">
                                <select name = "bloodgroup" data-bind="bloodGroup">
                                    <option disabled selected class = "default">Blood Group</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class = "group" data-group = "contact">
                        <div class = "group" data-group = "area" data-action = "auto_contact">
                            <div class = "line">
                                <div class = "elem half">
                                    <select name = "district" class = "ignore" data-bind = "district">
                                        <option selected disabled class = "default">Choose District</option>

                                    </select>
                                </div>
                                <div class = "elem half">
                                    <select name = "id" data-bind = "area">
                                        <option selected disabled class = "default">Choose Area</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class = "elem">
                            <input type = "text" name = "address" 
                                value = "${state.contact && state.contact.address ? state.contact.address : ''}" 
                                placeholder="address" />
                        </div>
                        <div class = "elem">
                            <input type = "text" name = "phoneNo" 
                                value = "${state.contact && state.contact.phoneNo ? state.contact.phoneNo : ''}" 
                                placeholder="Phone No." />
                        </div>                            
                    </div>

                    <div class = "elem left">
                        <input type = "checkbox" name = "donate" />
                        <label for = "donate">I am ready to doante blood</label>
                    </div>
                    <div class = "bar">
                        <div class = "elem half"></div>
                        <div class = "elem half toRight">
                            <a href = "#" class = "button solid white" 
                                onclick="components.profile.methods.save(this, event)">Save</a>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
    `
}

components.profile.methods = {
    bindAll : function(selector, data){
        var district = selector.find("[data-bind='district']");
        var area = selector.find("[data-bind='area']");

        var bloodGroup = selector.find("[data-bind='bloodGroup']");

        ajaxGet('static/bloodGroups/', (res) => {
            for(let i = 0; i < res.length; i++){
                bloodGroup.append(/*html*/`<option value = "${res[i].bloodgroup}">${res[i].bloodgroup}</option>`)
            }
            if(data.bloodGroup && data.bloodGroup.bloodgroup){
                bloodGroup.val(data.bloodGroup.bloodgroup);
            }
        })

        ajaxGet('location/districts', (res) => {
            for(let i = 0; i < res.length; i++){
                let item = res[i];
                district.append(/*html*/ `<option value = "${item.name}">${item.name}</option>`);
            }
            if(data.contact && data.contact.area && data.contact.area.district){
                district.val(data.contact.area.district.name)
                if(data.contact.area.district.name){
                    ajaxGet("location/districts/" + data.contact.area.district.name + "/areas", (res) => {
                        for(let i = 0; i < res.length; i++){
                            area.append(/*html*/`<option value = ${res[i].id}>${res[i].name}</option>`)
                        }
                        area.val(data.contact.area.id);
                    })
                }   
            }
        })

        district.on("change", function(){
            let dis = $(this).val();
            console.log(dis);
            ajaxGet("location/districts/" + dis + "/areas", (res) => {
                area.find("option:gt(0)").remove();
                for(let i = 0; i < res.length; i++){
                    area.append(/*html*/`<option value = ${res[i].id}>${res[i].name}</option>`)
                }
            })            
        })
    },

    save : function(selector, e){
        e.preventDefault();
        var form = $(selector).closest("form");
        let data = parseForm(form);
        ajaxPut('users/', data, (res)=> {
            console.log(res);
        })
    },

    uploadPhoto : function(selector, e){
        let files = $(selector)[0].files;
        if(!files.length){
            return;
        }
        $(selector).closest(".dp").addClass("uploading");        
        let formData = new FormData();
        formData.append("file", files[0]);
        ajaxPostUpload('users/profilePhoto', formData, (res)=> {
            $(selector).closest(".dp").find(".dp_img").attr("src", res.dpLocation);
            $(selector).closest(".dp").removeClass("uploading");
        });
    }
}