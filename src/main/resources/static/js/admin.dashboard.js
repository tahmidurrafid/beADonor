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

importJs('/js/Component/admin/moderator.js')
importJs('/js/Component/admin/addModerator.js')
importJs('/js/Component/admin/gallery.js')
importJs('/js/Component/admin/addMedia.js')


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
        if(dashboard == "moderators"){
            createModerators(state);
        }else if(dashboard == "gallery"){
            createGallery(state);
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

function createModerators(state){
    var data = {
        status : state.state.toUpperCase(),
        pageNo : state.page,
        pageSize : pageSize
    }
    console.log("state", state.state );

    console.log(state);

    if( state.state.toUpperCase() == "ACTIVE" || state.state.toUpperCase() == "DISABLED" ){
        console.log("admin/moderators?" + serializeBody(data));
        ajaxGet("admin/moderators?" + serializeBody(data) , (res)=>{
            for(var i = 0; i < res.content.length; i++){
                res.content[i].hideStateChanger = true;                
                $(".topic-content .items").append( components.moderator( replaceNulls(res.content[i]) ) );
            }
            console.log(parseInt(res.totalPages, 10));
            $(".topic-content").append( components.pagination({count : parseInt(res.totalPages, 10), 
                    current : parseInt(state.page, 10) }) );
        })
    }else if(state.state.toUpperCase() == "ADD"){
        console.log(components, "components")
        $(".topic-content .items").append( components.addModerator({}) );
    }
}

function createGallery(state){
    var data = {
        status : state.state.toUpperCase(),
        pageNo : state.page,
        pageSize : pageSize
    }
    console.log("Gallery state", state.state );

    // console.log(state);
    if( state.state.toUpperCase() == "ALL"){
        console.log("admin/gallery?" + serializeBody(data))
        ajaxGet("admin/gallery?" + serializeBody(data) , (res)=>{
            for(var i = 0; i < res.content.length; i++){
                $(".topic-content .items").append( components.gallery( replaceNulls(res.content[i]) ) );
            }
            console.log(parseInt(res.totalPages, 10));
            $(".topic-content").append( components.pagination({count : parseInt(res.totalPages, 10), 
                    current : parseInt(state.page, 10) }) );
        })

    }else{
        $(".topic-content .items").append( components.addMedia( {} ) );        
    }
    // if( state.state.toUpperCase() == "ACTIVE" || state.state.toUpperCase() == "DISABLED" ){
    //     console.log("admin/moderators?" + serializeBody(data));
    //     ajaxGet("admin/moderators?" + serializeBody(data) , (res)=>{
    //         for(var i = 0; i < res.content.length; i++){
    //             res.content[i].hideStateChanger = true;
    //             $(".topic-content .items").append( components.moderator( replaceNulls(res.content[i]) ) );
    //         }
    //         console.log(parseInt(res.totalPages, 10));
    //         $(".topic-content").append( components.pagination({count : parseInt(res.totalPages, 10), 
    //                 current : parseInt(state.page, 10) }) );
    //     })
    // }else if(state.state.toUpperCase() == "ADD"){
    //     console.log(components, "components")
    //     $(".topic-content .items").append( components.addModerator({}) );
    // }
}

