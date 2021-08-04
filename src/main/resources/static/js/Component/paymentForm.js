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
                                <input type = "text" name = "amount" placeholder="Amount (Taka)" />
                            </div>
                            <div class = "elem group" data-group = "method">
                                <select value = "Payment Method" name = "name">
                                    ${
                                        state.methods.map( e => {
                                            return /*html*/`<option value = "${e.name}">${e.name}</option>`
                                        }).join(" ")
                                    }
                                </select>
                            </div>
                        </div>
                        <div class = "elem half">
                            <div class = "elem">
                                <input type = "text" name = "reference" placeholder = "Reference"/>
                            </div>
                            <div class = "elem">
                                <input type = "text" name = "transactionId" placeholder="TransactionID" />
                            </div>
                        </div>
                    </div>
                    <div class = "bar">
                        <div class = "elem error"></div>
                    </div>
                    <div class = "bar colap to-right">
                        <div class = "elem">
                            <div class = "loader" style = "display : none"></div>
                        </div>
                        <div class = "elem ">
                            <input type = "submit" class = "ignore button solid white small" value = "submit" 
                            onclick="components.paymentForm.methods.submit(this, event)" />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
    `
}

components.paymentForm.methods = {
    submit : function(me, event){
        let form = $(me).closest("form");
        form.find(".loader").show(300);
        submitForm(me, 'user/payment', 
            ()=> {
                form.find(".loader").hide(300);                
                window.location.href = '/user/payments'
            }
        );
    }
}