<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>  

<html>
    <head>
        <title>Be A Donor</title>

        <script type = "text/javascript">
            importJs('/js/Component/campaign/campaignPreview.js');
            importJs('/js/Component/pagination.js')
            
            $(document).ready(function(){
                var data = {
                    pageNo : ${pageNo},
                    pageSize : 10
                }
                ajaxGet("campaign?" + serializeBody(data), (res) => {
                    $(".root-container .items .loader-big").hide();
                    console.log(res);
                    for(var i = 0; i < res.content.length; i++){
                        res.content[i].request.paid = res.content[i].paid; 
                        $(".campaigns .items").append( components.campaignPreview( replaceNulls(res.content[i].request) ) );
                    }
                    console.log(parseInt(res.totalPages, 10))
                    $(".campaigns").append( components.pagination({count : parseInt(res.totalPages, 10), 
                            current : data.pageNo }) );
                })
            });
        </script>

    </head>

    <body>
        <div class = "root-container campaigns">
            <div class = "topic-title"><span>Please Help</span></div>
            <div class = "items">
                <div class = "loader-big">
                    <div class = "spinner"></div>
                </div>
            </div>
        </div>
    </body>
</html>