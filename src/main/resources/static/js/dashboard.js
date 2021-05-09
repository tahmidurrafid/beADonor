
class DashboardFactory{
    create = function(dashboard){
        if(dashboard == "requests"){
            createRequests();
        }else if(dashboard == "payments"){
            createPayments();
        }else if(dashboard == "items"){
            createItems();
        }
    }
}



function createPayments(){
    ajaxGet("payments/", (res)=>{
        for(var i = 0; i < res.length; i++){
            $(".topic-content .items").append( paymentComp( replaceNulls(res[i]) ) );
        }
    })
}

function createRequests(){
    ajaxGet("helpRequests/", (res)=>{
        for(var i = 0; i < res.length; i++){
            $(".topic-content .items").append( requestComp( replaceNulls(res[i]) ) );
        }
    })
}

function createItems(){
    ajaxGet("items/", (res)=>{
        for(var i = 0; i < res.length; i++){
            $(".topic-content .items").append( itemComp( replaceNulls(res[i]) ) );
        }
    })
}

function itemComp(state){
    return /*html*/`
    <div class = "item dpView expanded">
        <div class = "dp">
            <img src = "${state.user.dpLocation}" />
        </div>
        <div class = "details">
            <h4>
                ${state.title}
            </h4>
            <div class = "bar">
                <h6>${state.category.name}</h6>
                <h6>${state.date}</h6>
            </div>
            <div class = "para small">
                ${state.description}
            </div>
            <div class = "bar">
                <h5 class = "dash">By ${state.user.name}</h5>
                <a class = "button solid small white exp">
                    View Details
                </a>
            </div>
            <div class = "bar colap">
                <div class = "elem half">
                    <h5>Contact Details: </h5>
                    <table>
                        <tr>
                            <td>Name : </td>
                            <td>${state.contact.contactName}</td>
                        </tr>
                        <tr>
                            <td>Phone : </td>
                            <td>${state.contact.phoneNo}</td>
                        </tr>
                        <tr>
                            <td>Address : </td>
                            <td>${state.contact.address} <br />
                            ${state.contact.area.name}, ${state.contact.area.district.name}.</td>
                        </tr>
                    </table>
                </div>

            </div>

            <div class = "elem colap">
                <h5>Attachments :</h5>
                ${state.attachments.map( (attc) => /*html*/`
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
                    <a href = "#" class = "button solid white small">
                        View Less
                    </a>
                </div>
            </div>

        </div>
    </div>
    `
}

function paymentComp(state){
    return /*html*/ `
    <div class = "item dpView collapsed">
        <div class = "dp">
            <img src = "${state.user.dpLocation}" />
        </div>
        <div class = "details">
            <div class = "bar">
                <div class = "elem half">
                    <h6>${state.category.name}</h6>
                    <table>
                        <tr>
                            <td>Amount : </td><td>${state.amount} Taka</td>
                        </tr>
                        <tr class = "colap">
                            <td>Date : </td><td>${state.date}</td>
                        </tr>
                    </table>
                </div>
                <div class = "elem half">
                    <table>
                        <tr>
                            <td>Method : </td><td>${state.method.name}</td>
                        </tr>
                        <tr>
                            <td>Transaction ID </td><td>${state.transactionId}</td>
                        </tr>
                        <tr class = "colap">
                            <td>Reference </td><td>${state.reference}</td>
                        </tr>
                    </table>                            
                </div>
            </div>
            <div class = "bar">
                <h5 class = "dash">${state.user.name}</h5>
                <a class = "button solid small white exp" data-action = "toggleDpView">
                    View Details
                </a>
            </div>

            <div class = "bar colap">
                <div class = "elem colap">
                    <a class = "link_to">
                        View All Messages
                    </a>
                </div> 
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
}

function requestComp(state){
    return /*html*/`
    <div class = "item dpView collapsed">
        <div class = "dp">
            <img src = "${state.user.dpLocation}" />
        </div>
        <div class = "details">
            <h4>
                ${state.title} ${state.type}
            </h4>
            <div class = "bar">
                <h6>${state.helpCategory.name}</h6>
                <h6>${state.date}</h6>
            </div>
            <div class = "para small">
                ${state.description}
            </div>
            <div class = "bar">
                <h5 class = "dash">By ${state.user.name}</h5>
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
                            <td>${state.contact.contactName}</td>
                        </tr>
                        <tr>
                            <td>Phone : </td>
                            <td>${state.contact.phoneNo}</td>
                        </tr>
                        <tr>
                            <td>Address : </td>
                            <td>${state.contact.address}<br />
                            ${state.contact.area.name}, ${state.contact.area.district.name}</td>
                        </tr>
                    </table>
                </div>
                <div class = "elem half">
                    <h5>Contact Details: </h5>
                    <table>
                        <tr>
                            <td>Name : </td>
                            <td>${state.guardianContact.contactName}</td>
                        </tr>
                        <tr>
                            <td>Phone :</td>
                            <td>${state.guardianContact.phoneNo}</td>
                        </tr>
                        <tr>
                            <td>Address : </td>
                            <td>${state.guardianContact.address}<br />
                            ${state.guardianContact.area.name}, ${state.guardianContact.area.district.name}</td>
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
}