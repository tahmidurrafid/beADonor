importJs('/js/Component/request.js')
importJs('/js/Component/pagination.js')
importJs('/js/Component/payment.js')
importJs('/js/Component/items.js')
importJs('/js/Component/info.js')
importJs('/js/Component/gifts.js')
importJs('/js/Component/profile.js')

importJs('/js/Component/requestForm.js')
importJs('/js/Component/paymentForm.js')
importJs('/js/Component/itemForm.js')
importJs('/js/Component/infoForm.js')
importJs('/js/Component/giftForm.js')

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
    console.log("state", state.state );

    if( state.state.toUpperCase() == "ALL"){
        console.log("user/helpRequests?" + serializeBody(data));
        ajaxGet("user/helpRequests?" + serializeBody(data) , (res)=>{
            for(var i = 0; i < res.content.length; i++){
                res.content[i].hideStateChanger = true;                
                $(".topic-content .items").append( components.request( replaceNulls(res.content[i]) ) );
            }
            console.log(parseInt(res.totalPages, 10));
            $(".topic-content").append( components.pagination({count : parseInt(res.totalPages, 10), 
                    current : parseInt(state.page, 10) }) );
        })
    }else if( state.state.toUpperCase() == "CREATE"){
        ajaxGet("categories/helpRequest", (res)=>{
            let formState = {
                categories : res
            };
            ajaxGet("static/bloodGroups", (blood)=>{
                console.log(blood, "blood");
                formState.groups = blood;
                $(".topic-content").append( components.requestForm( formState ) );
                bindContactForms($(".topic-content"));                
            })
        });
    }
}

function createPayments(state){

    var data = {
        status : state.state.toUpperCase(),
        pageNo : state.page,
        pageSize : pageSize
    }

    if( state.state.toUpperCase() == "ALL"){
        ajaxGet("user/payments?" + serializeBody(data) , (res)=>{
            for(var i = 0; i < res.content.length; i++){
                res.content[i].hideStateChanger = true;
                $(".topic-content .items").append( components.payment( replaceNulls(res.content[i]) ) );
            }
            $(".topic-content").append( components.pagination({count : parseInt(res.totalPages, 10), 
                    current : parseInt(state.page, 10) }) );
        })
    }else if( state.state.toUpperCase() == "CREATE"){
        ajaxGet("categories/donation", (res)=>{
            let formState = {
                categories : res
            };
            $(".topic-content").append( components.paymentForm( formState ) );
        });
    }

}


function createItems(state){

    var data = {
        status : state.state.toUpperCase(),
        pageNo : state.page,
        pageSize : pageSize
    }
    if( state.state.toUpperCase() == "ALL"){
        ajaxGet("user/items/" , (res)=>{
            console.log(res);
            for(var i = 0; i < res.content.length; i++){
                res.content[i].hideStateChanger = true;
                $(".topic-content .items").append( components.items( replaceNulls(res.content[i]) ) );
            }
            $(".topic-content").append( components.pagination({count : parseInt(res.totalPages, 10), 
                    current : parseInt(state.page, 10) }) );
        })
    }else if( state.state.toUpperCase() == "CREATE"){
        ajaxGet("categories/item", (res)=>{
            let formState = {
                categories : res
            };
            $(".topic-content").append( components.itemForm( formState ) );
            bindContactForms($(".topic-content"));            
        });
    }


}

function createInfo(state){
    var data = {
        status : state.state.toUpperCase(),
        pageNo : state.page,
        pageSize : pageSize
    }
    if( state.state.toUpperCase() == "ALL"){
        ajaxGet("user/info" , (res)=>{
            console.log(res);
            for(var i = 0; i < res.content.length; i++){
                res.content[i].hideStateChanger = true;
                $(".topic-content .items").append( components.info( replaceNulls(res.content[i]) ) );
            }
            $(".topic-content").append( components.pagination({count : parseInt(res.totalPages, 10), 
                    current : parseInt(state.page, 10) }) );
        })
    }else if( state.state.toUpperCase() == "CREATE"){
        ajaxGet("categories/info", (res)=>{
            let formState = {
                categories : res
            };
            $(".topic-content").append( components.infoForm( formState ) );
            bindContactForms($(".topic-content"));            
        });
    }

}

function createGifts(state){

    var data = {
        status : state.state.toUpperCase(),
        pageNo : state.page,
        pageSize : pageSize
    }
    if( state.state.toUpperCase() == "ALL"){
        ajaxGet("user/gifts" , (res)=>{
            console.log(res);
            for(var i = 0; i < res.content.length; i++){
                res.content[i].hideStateChanger = true;
                $(".topic-content .items").append( components.gifts( replaceNulls(res.content[i]) ) );
            }
            $(".topic-content").append( components.pagination({count : parseInt(res.totalPages, 10), 
                    current : parseInt(state.page, 10) }) );
        })
    }else if( state.state.toUpperCase() == "CREATE"){
        ajaxGet("auth/me", (me)=> {
            ajaxGet("categories/gift", (res)=>{
                let formState = {
                    categories : res,
                    me : me
                };
                console.log(formState)
                $(".topic-content .items").append( components.giftForm( formState ) );
                bindContactForms($(".topic-content"));            
            });
        })
    }

}

async function createProfile(){
    ajaxGet('auth/me', (res) => {
        var profile = components.profile;
        var val = $(".topic-content .items").append( profile(res) )[0];
        // console.log('contatc' , res.contact.area)
        profile.methods.bindAll($(val), res);
    });
}