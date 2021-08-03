components.stateChanger = function(state){
    
    return /*html*/`
    <div class = "stateChanger" data-store = '${JSON.stringify(state)}'>
        <div class = "options">
            <select>
                <option value = "PENDING" ${state.status == "PENDING" ? "selected" : ""}>Unmark</option>
                <option value = "MARKED" ${state.status == "MARKED" ? "selected" : ""}>Mark</option>
                <option value = "APPROVED" ${state.status == "APPROVED" ? "selected" : ""}>Approve</option>
                <option value = "REJECTED" ${state.status == "REJECTED" ? "selected" : ""}>Reject</option>
                <option value = "CAMPAIGN" ${state.status == "CAMPAIGN" ? "selected" : ""}>Campaign</option>
                <option value = "FINISHED" ${state.status == "FINISHED" ? "selected" : ""}>Finish</option>
            </select>
            <a href = "#" class = "button solid white small effectOn" 
            onClick = "components.stateChanger.methods.changed(this, event)">
                Go
            </a>
            <div class = "loader" style = "display : none"></div>
        </div>
        <div class = "marked" style = "display : none">
            <div class = "notify">Alerady Marked by other user. Are you sure?</div>
            <div class = "decision">
                <a href = "#" class = "button solid white small effectOn" 
                onClick = "components.stateChanger.methods.confirmYes(this, event)">
                    Yes
                </a>
                <a href = "#" class = "button solid white small effectOn" 
                onClick = "components.stateChanger.methods.confirmNo(this, event)">
                    No
                </a>
            </div>        
        </div>

    </div>
    `    
}
components.stateChanger.methods = {

    getAll : function(me){
        let selector = $(me).closest(".stateChanger");

        let state = JSON.parse(selector.attr("data-store"));

        let select = selector.find("select");
        let warning = selector.find(".marked");

        let body = {
            status : select.val()
        }
        return {
            selector : selector,
            state : state,
            select : select,
            warning : warning,
            body : body
        }
    },

    changed : function(me, e){

        e.preventDefault();

        let all = this.getAll(me);

        all.selector.find(".loader").show();
        console.log(all.state);
        console.log(all.body);

        ajaxPut(all.state.hit, all.body, (res) => {
            all.selector.find(".loader").hide(200);
            if(res.success == 0){
                all.warning.show(200);
            }
        }, 
        (err) => {
            console.log("Error");
        })
    },

    confirmYes : function(me, e){
        e.preventDefault();

        let all = this.getAll(me);
        all.body.confirm = "YES";
        ajaxPut(all.state.hit, all.body, (res) => {
            if(res.success == 1){
                all.warning.hide(200);
            }
        })
    },

    confirmNo : function(me, e){
        e.preventDefault();
        let all = this.getAll(me);
        all.warning.hide(200);
    }
}