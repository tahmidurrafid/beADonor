importJs('/js/Component/gallery/lightbox.js')

components.galleryView = function(state){
    return /*html*/ `
    <div class = "item" data-storage = '${JSON.stringify(state)}'>
        <div class = "wrap">
            <div class = "hover">
                <div class = "title">${state.title ? state.title : ''}</div>
                <div class = "description">${state.description ? state.description : ''}
                </div>
                <div class = "click">
                    <div class = "button small flat "
                    onClick = "components.galleryView.methods.lightbox(this, event)">View</div>
                </div>
            </div>
            <div class = "image">
                <img src="${state.location ? state.location : '' }" />
            </div>
        </div>
    </div>
    `
}

components.galleryView.methods = {
    lightbox : function(me, event){
        let selector = $(me).closest(".item");
        let data = JSON.parse(selector.attr("data-storage"));
        $(".gallery").append(components.lightbox(data));
    }
}