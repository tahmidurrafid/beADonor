components.gifts = function(state){
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
                    ${components.stateChanger({hit : "issue/status/" + state.id, 
                        status : state.status})}
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
