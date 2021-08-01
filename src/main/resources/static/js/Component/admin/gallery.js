components.gallery = function(state){
    return /*html*/`
    <div class = "item dpView collapsed">
        <div class = "dp">
            <img src = "${state ? state.location : ''}" />
        </div>
        <div class = "details">
            <h4>
                ${state ? state.title : ''}
            </h4>
            <div class = "para small">
                ${state ? state.description : ''}
            </div>
            <div class = "bar">
                <h5 class = "dash"></h5>
                <a href = "#" class = "button solid small white exp" >
                    Edit
                </a>
            </div>

        </div>
    </div>

    `
}
