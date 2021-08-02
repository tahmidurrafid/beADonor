components.donor = function(state){
    return /*html*/ `
    <div class="item">
        <div class = "wrap">
            <div class = "dp">
                <img src = "/attachments/dp/12.jpg" />
            </div>
            <div class="details">
                <div class = "name">${state && state.user ? state.user.name : ''}</div>
                <div class = "measure">
                    <div class = "amount">
                        <span class ="count">${state && state.total? state.total : ''} Tk</span>
                        <span class = "caption">Donated</span>
                    </div>
                    <div class = "amount">
                        <span class ="count">${state && state.items != null? state.items : ''} Items</span>
                        <span class = "caption">Donated</span>
                    </div>
                </div>
            </div>
        </div>
    </div>    
    `
}