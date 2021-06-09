components.payment = function(state){
    return /*html*/ `
    <div class = "item dpView collapsed">
        <div class = "dp">
            <img src = "${state.user? state.user.dpLocation : ''}" />
        </div>
        <div class = "details">
            <div class = "bar">
                <div class = "elem half">
                    <h6>${state.category? state.category.name : ''}</h6>
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
                            <td>Method : </td><td>${state.method? state.method.name : ''}</td>
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