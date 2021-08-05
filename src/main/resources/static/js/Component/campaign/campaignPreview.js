components.campaignPreview = function(state){    
    if(!state.paid || state.paid == "" ){
        state.paid = 0;
    }

    state.percent = state.paid/state.amount;

    if( isNaN(state.percent) ){
        state.percent = 0;
    }
    state.percent = state.percent*100;
    state.percent = parseInt(state.percent, 10);
    state.description = state.description.substring(0, 80);

    console.log(state)
    return /*html*/`
    <div class = "item">
        <div class = "item-wrapper">
            <div class = "title">${state.title} </div>
            <div class = "brief">
                ${state.description}
            </div>
            <div class = "camp-progress">
                <div class = "bar-line">
                    <div class = "bar">
                        <div class = "full">
                            <div class = "fraction" style = "width : ${state.percent}%"></div>
                        </div>
                    </div>
                    <div class = "percentage">
                        ${state.percent}%
                    </div>
                </div>
                <div class = "target">
                    Target: ${state.amount} Taka 
                </div>
            </div>
            <div class = "buttons">
                <div class = "left">
                    <a href = "/campaign/help/${state.id}">
                        Donate
                    </a>
                </div>
                <div class = "right">
                    <a href = "#">
                        More Details
                    </a>
                </div>
            </div>

        </div>
    </div>
    `
}

components.campaignPreview.methods = {

}