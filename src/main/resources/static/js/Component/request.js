components.request = function(state){
    return /*html*/`
    <div class = "item dpView collapsed">
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
                ${state.attachments.map( (attc) => `
                <a class = "attach" href = "#">
                    <div class = "download">
                        <img src = "/images/fi-rr-cloud-download.svg" />
                    </div>
                    <div class = "name">
                        ${attc.location}
                    </div>
                </a>
                `).join("") }
            </div>
            <div class = "bar colap">
                <div class = "elem flex">
                    <h5>Choose Action</h5>
                    <select>
                        <option>Approve</option>
                        <option>Mark</option>
                        <option>Reject</option>
                    </select>
                    <a href = "#" class = "button solid white small">
                        Go
                    </a>
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