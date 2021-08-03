components.request = function(state){
    console.log(state);    
    return /*html*/`
    <div class = "item dpView collapsed" data-storage = "${state.id}">
        <div class = "dp">
            <img src = "${state.user? state.user.dpLocation : ''}" />
        </div>
        <div class = "details">
            <h4>
                ${state.title}
            </h4>
            <div class = "bar">
                <h6>${state.helpCategory? state.helpCategory.name : ''}</h6>
                <h6>${state.date}</h6>
            </div>
            <div class = "para small">
                ${state.description}
            </div>
            <div class = "bar">
                <h5 class = "dash">By ${state.user ? state.user.name: ''}</h5>
                <a href = "#" class = "button solid small white exp" data-action = "toggleDpView">
                    View Details
                </a>
            </div>
            <div class = "bar colap">
                <div class = "elem half">
                    <h5>Contact Details: </h5>
                    <table>
                        <tr>
                            <td>Name :</td>
                            <td>${state.contact ? state.contact.contactName : ''}</td>
                        </tr>
                        <tr>
                            <td>Phone : </td>
                            <td>${state.contact ? state.contact.phoneNo : ''}</td>
                        </tr>
                        <tr>
                            <td>Address : </td>
                            <td>${state.contact ? state.contact.address : ''}<br />
                            ${state.contact && state.contact.area ? 
                            `
                            ${state.contact.area.name}, ${state.contact.area.district.name}
                            ` : ''
                            }
                            </td>
                        </tr>
                    </table>
                </div>
                <div class = "elem half">
                    <h5>Contact Details: </h5>
                    <table>
                        <tr>
                            <td>Name : </td>
                            <td>${state.guardianContact ? state.guardianContact.contactName : ''}</td>
                        </tr>
                        <tr>
                            <td>Phone :</td>
                            <td>${state.guardianContact ? state.guardianContact.phoneNo : ''}</td>
                        </tr>
                        <tr>
                            <td>Address : </td>
                            <td>${state.guardianContact ? state.guardianContact.address : ''}<br />
                            ${
                                state.guardianContact && state.guardianContact.area ?  
                                `
                                ${state.guardianContact.area.name}, ${state.guardianContact.area.district.name}
                                ` : ''
                            }
                            </td>
                        </tr>
                    </table>
                </div>
            </div>

            <div class = "elem colap">
                <h5>Attachments :</h5>
                ${state.attachments.map( (attc) => /*html*/`
                <a class = "attach" href = "${attc.location}">
                    <div class = "download">
                        <img src = "/images/fi-rr-cloud-download.svg" />
                    </div>
                    <div class = "name">
                        ${attc.name}
                    </div>
                </a>
                `).join("") }
            </div>
            <div class = "bar colap">
                <div class = "elem " style = "display : flex"> 
                    <h5>
                        ${state.status == "PENDING" ? '' : 
                            state.status + " by " + state.markedByUser.name + " (" +
                            state.markedByUser.contact.phoneNo + ") "
                        }
                    </h5>
                    ${
                        state.helpCategory && state.helpCategory.name.toUpperCase().includes("BLOOD") 
                        && state.status != "PENDING"
                        ?
                        /*html*/`<div class = "button solid small white"
                        onClick = "components.request.methods.cancel(this, event)">
                            Cancel
                        </div>` :
                        ''
                    }

                </div>
            </div>
            <div class = "bar colap">
                <div class = "elem flex">
                    ${state.hideStateChanger? `` : /*html*/`
                        <h5>Choose Action</h5>
                        ${components.stateChanger({hit : "issue/status/" + state.id, 
                        status : state.status})}
                    `}
                </div>
                <div class = "elem flex">
                    <a href = "#" class = "button solid white small" data-action = "toggleDpView">
                        View Less
                    </a>
                </div>
            </div>

        </div>
    </div>
    `
};

components.request.methods = {
    cancel : function(me, event){
        let id = $(me).closest(".item").attr("data-storage");
        ajaxPut('bloodDonation/unmark/' + id, {} , (res) => {
            console.log("DONE", res);            
            $(me).closest(".bar").hide();
        }, (res) => {
            console.log("error", res);
        })
    }
}