components.giftForm = function(state){
    return /*html*/ `
    <div class = "item dpView expanded">
        <div class = "dp">
            <img src = "/images/dp.png" />
        </div>
        <div class = "details">
            <form>
                <div class = "bar">
                    <div class = "elem half">
                        <select value = "Choose Item">
                            <option>T-Shirt(500 points)</option>
                        </select>                                
                    </div>
                    <div class = "elem half">
                        <select>
                            <option value = "" disabled selected>Select Size</option>
                            <option>XL</option>
                            <option>XXL</option>
                            <option>M</option>
                            <option>L</option>
                        </select>
                    </div> 
                </div>

                <div class = "bar colap">
                    <div class = "elem half">
                        <h5>Shipping Address: </h5>
                        <div class = "elem">
                            <input type = "text title" placeholder="Name to contact"/>
                        </div>
                        <div class = "elem">
                            <input type = "text" placeholder="Phone No"/>                                        
                        </div>
                        <div class = "elem">
                            <select value = "District">
                                <option>Dhaka</option>
                            </select>
                        </div>
                        <div class = "elem">
                            <select value = "Area">
                                <option>Dhaka</option>
                            </select>
                        </div>
                        <div class = "elem">
                            <input type = "text" placeholder="Address"/>
                        </div>
                    </div>
                    <div class = "elem half">
                    </div>
                </div>

                <div class = "bar colap">
                    <div class = "elem"></div>
                    <div class = "elem">
                        <submit class = "button solid white small">
                            Submit
                        </a>
                    </div>
                </div>
            </form>
        </div>
    </div>
    `;
}