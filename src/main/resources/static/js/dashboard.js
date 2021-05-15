var pageSize = 5;

class DashboardFactory{
    create = function(dashboard, state){
        console.log(state)
        if(dashboard == "requests"){
            createRequests(state);
        }else if(dashboard == "payments"){
            createPayments(state);
        }else if(dashboard == "items"){
            createItems(state);
        }else if(dashboard == "info"){
            createInfo(state);
        }else if(dashboard == "gifts"){
            createGifts(state);
        }

        $("#dashboard").find(".content .tab>a").each(function(index){
            if($(this).attr("href").toUpperCase().includes( state.state.toUpperCase() ) ){
                $(this).addClass("selected");
            }
        })

        $("#dashboard .left-bar .links>a").each(function(index){
            if($(this).attr("href").toUpperCase().includes( dashboard.toUpperCase() ) ){
                $(this).addClass("selected");
            }
        });
        
    }
}

function createPayments(){
    ajaxGet("payments/", (res)=>{
        for(var i = 0; i < res.length; i++){
            $(".topic-content .items").append( paymentComp( replaceNulls(res[i]) ) );
        }
    })
}

function createRequests(state){
    var data = {
        status : state.state.toUpperCase(),
        pageNo : state.page,
        pageSize : pageSize
    }
    console.log("helpRequests?" + serializeBody(data));
    ajaxGet("helpRequests?" + serializeBody(data) , (res)=>{
        for(var i = 0; i < res.content.length; i++){
            $(".topic-content .items").append( requestComp( replaceNulls(res.content[i]) ) );
        }
        console.log(parseInt(res.totalPages, 10))
        $(".topic-content").append(paginationComp({count : parseInt(res.totalPages, 10), 
                current : parseInt(state.page, 10) }));
    })
}

function createItems(){
    ajaxGet("items/", (res)=>{
        for(var i = 0; i < res.length; i++){
            $(".topic-content .items").append( itemComp( replaceNulls(res[i]) ) );
        }
    })
}

function createInfo(){
    ajaxGet("info/", (res)=>{
        for(var i = 0; i < res.length; i++){
            $(".topic-content .items").append( InfoComp( replaceNulls(res[i]) ) );
        }
    }) 
}

function createGifts(){
    ajaxGet("gifts/", (res)=>{
        for(var i = 0; i < res.length; i++){
            $(".topic-content .items").append( giftComp( replaceNulls(res[i]) ) );
        }
    })
}

function paginationComp(state){
    return /*html*/ `
    <div class = "pagination">
        <div class = "pager left">
            <a href = "${state.current == 1? 1 : state.current-1}" class = "pageNo">
                <i class="fa fa-angle-double-left"></i>
            </a>
            ${
                ((count, current) => {
                    var html = "";
                    for(var i = 1; i <= 6 && i <= count; i++){
                        var pageNo = i;
                        if(count > 6) {
                            pageNo = i <= 3? i : (i == 4 ? '...' : (count- (6-i)) );
                        }
                        html += /*html*/`<a href = "${pageNo}" class = "pageNo ${pageNo == current ? `selected` : ''}">
                                    ${pageNo}</a> \n`;
                    }
                    return html;
                })(state.count, state.current)
            }

            <a href = "${state.current == state.count? state.count : state.current+1}" class = "pageNo right">
                <i class="fa fa-angle-double-right"></i>
            </a>
        </div>
    </div>
`
}

function giftComp(state){
    return /*html*/`
    <div class = "item dpView collapsed">
        <div class = "dp">
            <img src = "${state.user.dpLocation}" />
        </div>
        <div class = "details">
            <div class = "bar">
                <h6>T-shirt | ${state.size}</h6>
                <h6>30 April, 2021</h6>
            </div>
            <div class = "bar">
                <h5 class = "dash">By ${state.user ? state.user.name : ''}</h5>
                <a class = "button solid small white exp" data-action = "toggleDpView">
                    View Details
                </a>
            </div>
            <div class = "bar colap">
                <div class = "elem half">
                    <h5>Contact Details: </h5>
                    <table>
                        <tr>
                            <td>Name : </td>
                            <td>${state.contact ? state.contact.contactName : ''}</td>
                        </tr>
                        <tr>
                            <td>Phone : </td>
                            <td>${state.contact ? state.contact.phoneNo : ''}</td>
                        </tr>
                        ${
                            state.contact && state.contact.area ? /*html*/ `
                        <tr>
                            <td>Address : </td>
                            <td>${state.contact.address} <br />
                            ${state.contact.area.name}, ${state.contact.area.district.name}.</td>
                        </tr>                   
                        ` : ''}
                    </table>
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

function InfoComp(state){
    return /*html*/`
    <div class = "item dpView expanded">
        <div class = "dp">
            <img src = "${state.user? state.user.dpLocation : ''}" />
        </div>
        <div class = "details">
            <h4>
                ${state.title}
            </h4>
            <div class = "bar">
                <h6>${state.category? state.category.name : ''}</h6>
                <h6>${state.date}</h6>
            </div>
            <div class = "para small">
                ${state.description}
            </div>
            <div class = "bar">
                <h5 class = "dash">By ${state.user ? state.user.name : ''}</h5>
                <a class = "button solid small white exp" data-action = "toggleDpView">
                    View Details
                </a>
            </div>
            <div class = "bar colap">
                <div class = "elem half">
                    <h5>Contact Details: </h5>
                    <table>
                        <tr>
                            <td>Name : </td>
                            <td>${state.contact ? state.contact.contactName : ''}</td>
                        </tr>
                        <tr>
                            <td>Phone : </td>
                            <td>${state.contact ? state.contact.phoneNo : ''}</td>
                        </tr>
                        ${
                            state.contact && state.contact.area ? 
                            /*html*/`
                            <tr>
                                <td>Address : </td>
                                <td>${state.contact.address}<br />
                                ${state.contact.area.name}, ${state.contact.area.district.name}.</td>
                            </tr>                            
                            ` : 
                            ''
                        }
                    </table>
                </div>
                <div class = "elem half">

                </div>
            </div>

            <div class = "elem colap">
                <h5>Attachments :</h5>
                ${
                    state.attachments.map( (e) => /*html*/`
                    <a class = "attach" href = "#">
                        <div class = "download">
                            <img src = "/images/fi-rr-cloud-download.svg" />
                        </div>
                        <div class = "name">
                            ${e.location}
                        </div>
                    </a>
                    `).join("")
                }
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

function itemComp(state){
    return /*html*/`
    <div class = "item dpView collapsed">
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
                <a class = "button solid small white exp" data-action = "toggleDpView">
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
                    <a href = "#" class = "button solid white small"  data-action = "toggleDpView">
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
}