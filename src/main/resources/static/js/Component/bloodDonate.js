components.bloodDonate = function(state){
    return /*html*/ `
<div class = "item " data-storage = ${state.id}>
    <div class = "headline">
        <div class = "title">${state.title}</div>
        <div class = "buttons">
            <div class = "button solid white small" 
            onClick = "components.bloodDonate.methods.toggle(this, event)">View</div>
            <div class = "button solid white small"
            onClick = "components.bloodDonate.methods.accept(this, event)">Accept</div>
        </div>
    </div>
    <div class = "donate-request" style = "display :none">

        <div class = " dpView expanded">
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
    
    
            </div>
        </div>


    </div>
</div>

    `
}

components.bloodDonate.methods = {
    toggle : function(me, event){
        let btn = $(me);
        let comp = btn.closest(".item");
        console.log(comp.hasClass("view"), "HAS");
        if(comp.hasClass("view")){
            comp.find(".donate-request").hide();
            btn.html("View");
            comp.removeClass("view");
        }else{
            comp.find(".donate-request").show();
            btn.html("Hide");            
            comp.addClass("view");            
        }
    },

    accept : async function(me, event){
        let comp = $(me).closest(".item");
        let id = comp.attr("data-storage");
        await ajaxPut('bloodDonation/' + id, () => {
            console.log("Successful")
        });
        location.reload();
    }

}