components.campaignRequest = function(state){
    
    return /*html*/`
    <div class = "item dpView expanded">
        <div class = "dp">
            <img src = "${state && state.user && state.user.dpLocation ? state.user.dpLocation  : ''}" />
        </div>
        <div class = "details">
            <h4>
                ${state.title}
            </h4>
            <div class = "bar">
                <h6>${state && state.helpCategory ? state.helpCategory.name : '' }</h6>
                <h6>${state && state.date ? state.date : ''}</h6>
            </div>
            <div class = "para small">
                ${state.description}
            </div>
            <div class = "bar">
                <h5 class = "dash">By ${state && state.user ? state.user.name : ''}</h5>
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

                <div class = "elem flex">
                    <div class="fb-share-button" 
                    data-href="http://local.foo.com:8080/campaign/help" 
                    data-layout="button_count" data-size="large">
                    <a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&amp;src=sdkpreparse" class="fb-xfbml-parse-ignore">Share</a></div>
                </div>

                <div class = "elem flex">
                    <a class = "button solid small white"
                        href = "/user/payments/create/1?ref=${state.id}">
                        Donate
                    </a>
                </div>
                
            </div>

        </div>
    </div>            

    `    
}
components.campaignRequest.methods = {
    
}