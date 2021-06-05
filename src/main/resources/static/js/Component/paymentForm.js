components.paymentForm = function(state){
    console.log(state);
    return /*html*/ `
    <div class = "items">
        <div class = "item dpView expanded">
            <div class = "dp">
                <img src = "/images/dp.png" />
            </div>
            <div class = "details">
                <form>
                    <div class = "bar">
                        <div class = "elem half group" data-group = "category">
                            <select value = "Category" name = "id">
                                <option selected disabled>Choose a category</option>
                                ${
                                    state.categories.map( elem =>
                                        `<option value = "${elem.id}">${elem.name}</option>`
                                    ).join("")
                                }
                            </select>
                        </div>
                        <div class = "elem half group" data-group = "refIssue">
                            <input disabled type = "text" name = "id" placeholder="Request Id" />
                        </div>
                    </div>

                    <div class = "bar colap">
                        <div class = "elem half">
                            <div class = "elem">
                                <input type = "text" name = "amount" placeholder="Amount (Taka)" value = "0"/>
                            </div>
                            <div class = "elem group" data-group = "method">
                                <select value = "Payment Method" name = "name">
                                    <option value = "bKash">bKash</option>
                                    <option value = "Nagad">Nagad</option>
                                    <option value = "SSLCommerz">SSLCommerz</option>
                                </select>
                            </div>
                            <div class = "elem">
                                <input type = "text" name = "transactionId" placeholder="TransactionID" />
                            </div>
                        </div>
                        <div class = "elem half">
                            <textarea placeholder="Any Message to Reviewer?"></textarea>
                            <div class = "elem">
                                <input type = "text" name = "reference" placeholder = "Reference"/>
                            </div>
                        </div>
                    </div>

                    <div class = "bar colap">
                        <div class = "elem"></div>
                        <div class = "elem">
                            <input type = "submit" class = "button solid white small" value = "submit" onclick="submitForm(this, 'user/payment')" />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
    `

}