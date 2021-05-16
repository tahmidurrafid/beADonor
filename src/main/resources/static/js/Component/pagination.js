components.pagination = function(state){
    return /*html*/ `
    <div class = "pagination">
        <div class = "pager left">
            <a href = "${state.current == 1? 1 : state.current-1}" class = "pageNo">
                <i class="fa fa-angle-double-left"></i>
            </a>
            ${
                ((count, current) => {
                    var html = "";
                    for(var i = 1; i <= 6 && i <= count; i++){
                        var pageNo = i;
                        if(count > 6) {
                            pageNo = i <= 3? i : (i == 4 ? '...' : (count- (6-i)) );
                        }
                        html += /*html*/`<a href = "${pageNo}" class = "pageNo ${pageNo == current ? `selected` : ''}">
                                    ${pageNo}</a> \n`;
                    }
                    return html;
                })(state.count, state.current)
            }

            <a href = "${state.current == state.count? state.count : state.current+1}" class = "pageNo right">
                <i class="fa fa-angle-double-right"></i>
            </a>
        </div>
    </div>
`
}