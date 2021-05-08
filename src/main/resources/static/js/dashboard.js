
class DashboardFactory{
    create = function(dashboard){
        if(dashboard == "requests"){
            createRequests();
        }
    }
}



function createRequests(){
    ajaxGet("helpRequests/", (res)=>{
        for(var i = 0; i < res.length; i++){
            $(".topic-content .items").append( requestComp(res[i]) );
        }
    })
}


function requestComp(state){
    return /*html*/`
    <div class = "item dpView expanded">
        <div class = "dp">
            <img src = "/images/dp.png" />
        </div>
        <div class = "details">
            <h4>
                ${state.title}
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
                <a class = "button solid small white exp">
                    View Details
                </a>
            </div>
            <div class = "bar colap">
                <div class = "elem half">
                    <h5>Contact Details: </h5>
                    <table>
                        <tr>
                            <td>Name :</td>
                            <td> </td>
                        </tr>
                        <tr>
                            <td>Phone : </td>
                            <td>${state.contact.phoneNo}</td>
                        </tr>
                        <tr>
                            <td>Address : </td>
                            <td>${state.contact.address}<br />
                            ${state.contact.area.name}</td>
                        </tr>
                    </table>
                </div>
                <div class = "elem half">
                    <h5>Contact Details: </h5>
                    <table>
                        <tr>
                            <td>Name : </td>
                            <td>Md. Tahmidur Rafid</td>
                        </tr>
                        <tr>
                            <td>Phone :</td>
                            <td>${state.guardianContact.phoneNo}</td>
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
                    <a href = "#" class = "button solid white small">
                        View Less
                    </a>
                </div>
            </div>

        </div>
    </div>
    `
}