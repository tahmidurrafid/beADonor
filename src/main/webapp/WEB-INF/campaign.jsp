<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>  

<html>
    <head>
        <title>Be A Donor</title>

        <script type = "text/javascript">
            importJs('/js/Component/campaign/campaignPreview.js');
            importJs('/js/Component/pagination.js')
            
            $(document).ready(function(){
                var data = {
                    pageNo : 1,
                    pageSize : 10
                }
                ajaxGet("campaign?" + serializeBody(data), (res) => {
                    console.log(res);
                    for(var i = 0; i < res.content.length; i++){
                        $(".campaigns .items").append( components.campaignPreview( replaceNulls(res.content[i]) ) );
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

            </div>
        </div>
    </body>
</html>