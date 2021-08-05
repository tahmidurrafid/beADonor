importJs('/js/Component/request.js')
importJs('/js/Component/pagination.js')
importJs('/js/Component/payment.js')
importJs('/js/Component/items.js')
importJs('/js/Component/info.js')
importJs('/js/Component/gifts.js')
importJs('/js/Component/stateChanger.js')
importJs('/js/Component/profile.js')

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
        }else if(dashboard == "profile"){
            createProfile(state);
        }

        $("#dashboard").find(".content .tab>a").each(function(index){
            if($(this).attr("href").toUpperCase().includes( state.state.toUpperCase() ) ){
                $(this).addClass("selected");
                console.log(state.state)
            }
        })

        $("#dashboard .left-bar .links>a").each(function(index){
            if($(this).attr("href").toUpperCase().includes( dashboard.toUpperCase() ) ){
                $(this).addClass("selected");
            }
        });
        
    }
}

function createRequests(state){
    var data = {
        status : state.state.toUpperCase(),
        pageNo : state.page,
        pageSize : pageSize
    }
    console.log("request Data" , data);

    console.log("helpRequests?" + serializeBody(data));
    ajaxGet("helpRequests?" + serializeBody(data) , (res)=>{
        $(".topic-content .items .loader-big").hide();
        for(var i = 0; i < res.content.length; i++){
            $(".topic-content .items").append( components.request( replaceNulls(res.content[i]) ) );
        }
        console.log(parseInt(res.totalPages, 10))
        $(".topic-content").append( components.pagination({count : parseInt(res.totalPages, 10), 
                current : parseInt(state.page, 10) }) );
    })
}

function createPayments(state){
    var data = {
        status : state.state.toUpperCase(),
        pageNo : state.page,
        pageSize : pageSize
    }

    ajaxGet("payments?" + serializeBody(data) , (res)=>{
        $(".topic-content .items .loader-big").hide();
        for(var i = 0; i < res.content.length; i++){
            $(".topic-content .items").append( components.payment( replaceNulls(res.content[i]) ) );
        }
        console.log(parseInt(res.totalPages, 10))
        $(".topic-content").append( components.pagination({count : parseInt(res.totalPages, 10), 
                current : parseInt(state.page, 10) }) );
    })
}

function createItems(state){
    var data = {
        status : state.state.toUpperCase(),
        pageNo : state.page,
        pageSize : pageSize
    }

    ajaxGet("items?" + serializeBody(data) , (res)=>{
        $(".topic-content .items .loader-big").hide();
        for(var i = 0; i < res.content.length; i++){
            $(".topic-content .items").append( components.request( replaceNulls(res.content[i]) ) );
        }
        console.log(parseInt(res.totalPages, 10))
        $(".topic-content").append( components.pagination({count : parseInt(res.totalPages, 10), 
                current : parseInt(state.page, 10) }) );
    })
}
    

function createInfo(state){
    var data = {
        status : state.state.toUpperCase(),
        pageNo : state.page,
        pageSize : pageSize
    }

    ajaxGet("info?" + serializeBody(data) , (res)=>{
        $(".topic-content .items .loader-big").hide();
        for(var i = 0; i < res.content.length; i++){
            $(".topic-content .items").append( components.request( replaceNulls(res.content[i]) ) );
        }
        console.log(parseInt(res.totalPages, 10))
        $(".topic-content").append( components.pagination({count : parseInt(res.totalPages, 10), 
                current : parseInt(state.page, 10) }) );
    })

}

function createGifts(state){

    var data = {
        status : state.state.toUpperCase(),
        pageNo : state.page,
        pageSize : pageSize
    }

    ajaxGet("gifts?" + serializeBody(data) , (res)=>{
        $(".topic-content .items .loader-big").hide();
        for(var i = 0; i < res.content.length; i++){
            $(".topic-content .items").append( components.gifts( replaceNulls(res.content[i]) ) );
        }
        $(".topic-content").append( components.pagination({count : parseInt(res.totalPages, 10), 
                current : parseInt(state.page, 10) }) );
    })

}

async function createProfile(){
    ajaxGet('auth/me', (res) => {
        $(".topic-content .items .loader-big").hide();
        var profile = components.profile;
        var val = $(".topic-content .items").append( profile(res) )[0];
        // console.log('contatc' , res.contact.area)
        profile.methods.bindAll($(val), res);
    });
}