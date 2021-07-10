components.campaignPreview = function(state){
    
    return /*html*/`
    <div class = "item">
        <div class = "item-wrapper">
            <div class = "title">Campaign title goes here</div>
            <div class = "brief">
                Here goes some brief for the campaign. ABCD Hi hello. It is good.
                Here goes some brief for the campaign. ABCD Hi hello. It is good.
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
                    Target: 25,24400 Taka 
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