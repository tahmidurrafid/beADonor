components.campaignPreview = function(state){    
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
                            <div class = "fraction"></div>
                        </div>
                    </div>
                    <div class = "percentage">
                        40%
                    </div>
                </div>
                <div class = "target">
                    Target: ${state.amount} Taka 
                </div>
            </div>
            <div class = "buttons">
                <div class = "left">
                    <a>
                        Donate
                    </a>
                </div>
                <div class = "right">
                    <a>
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