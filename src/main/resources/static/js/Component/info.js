components.info = function(state){
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