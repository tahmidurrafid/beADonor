importJs('/js/Component/request.js')
importJs('/js/Component/pagination.js')
importJs('/js/Component/payment.js')
importJs('/js/Component/items.js')
importJs('/js/Component/info.js')
importJs('/js/Component/gifts.js')

/* 
    components:
        request
        pagination
        payment
        items
        info
        gifts
*/

class DashboardFactory{
    create = function(dashboard, state){
        if(dashboard == "requests"){
            createRequests(state);
        }else if(dashboard == "payments"){
            createPayments(state);
        }else if(dashboard == "items"){
            createItems(state);
        }else if(dashboard == "info"){
            createInfo(state);
        }else if(dashboard == "gifts"){
            createGifts(state);
        }

        $("#dashboard").find(".content .tab>a").each(function(index){
            if($(this).attr("href").toUpperCase().includes( state.state.toUpperCase() ) ){
                $(this).addClass("selected");
            }
        })

        $("#dashboard .left-bar .links>a").each(function(index){
            if($(this).attr("href").toUpperCase().includes( dashboard.toUpperCase() ) ){
                $(this).addClass("selected");
            }
        });
        
    }
}

function createPayments(){
    ajaxGet("payments/", (res)=>{
        for(var i = 0; i < res.length; i++){
            $(".topic-content .items").append( components.payment( replaceNulls(res[i]) ) );
        }
    })
}

function createRequests(state){
    var data = {
        status : state.state.toUpperCase(),
        pageNo : state.page,
        pageSize : pageSize
    }

    console.log("helpRequests?" + serializeBody(data));
    ajaxGet("helpRequests?" + serializeBody(data) , (res)=>{
        for(var i = 0; i < res.content.length; i++){
            $(".topic-content .items").append( components.request( replaceNulls(res.content[i]) ) );
        }
        console.log(parseInt(res.totalPages, 10))
        $(".topic-content").append( components.pagination({count : parseInt(res.totalPages, 10), 
                current : parseInt(state.page, 10) }) );
    })
}

function createItems(){
    ajaxGet("items/", (res)=>{
        for(var i = 0; i < res.length; i++){
            $(".topic-content .items").append( components.items( replaceNulls(res[i]) ) );
        }
    })
}

function createInfo(){
    ajaxGet("info/", (res)=>{
        for(var i = 0; i < res.length; i++){
            $(".topic-content .items").append( components.info( replaceNulls(res[i]) ) );
        }
    }) 
}

function createGifts(){
    ajaxGet("gifts/", (res)=>{
        for(var i = 0; i < res.length; i++){
            $(".topic-content .items").append( components.gifts( replaceNulls(res[i]) ) );
        }
    })
}
