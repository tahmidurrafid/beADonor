components.lightbox = function(state){
    return /*html*/ `
    <div class = "lightbox">

        <div class = "wrap">
            <div class = "cross" onClick = "components.lightbox.methods.exit(this, event)">
                <i class = "fa fa-close"></i>
            </div>                    
            <div class = "image">
                <div class = "description">
                    ${state.description}
                </div>                        
                <img src = "${state.location}" />
            </div>
            <div class = "title">
                ${state.title}
            </div>
        </div>
    </div>    
    `
}

components.lightbox.methods = {
    exit : function(me, e){
        let selector = $(me).closest('.lightbox');
        selector.remove();
        // console.log("Ashche")
    }
}