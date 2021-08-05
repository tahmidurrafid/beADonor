<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>  

<html>
    <head>
        <title>Be A Donor</title>

        <script type = "text/javascript">
            importJs('/js/Component/gallery/galleryView.js');
            importJs('/js/Component/pagination.js')
            
            $(document).ready(function(){
                var data = {
                    pageNo : ${pageNo},
                    pageSize : 10
                }
                ajaxGet("gallery?" + serializeBody(data), (res) => {
                    $(".root-container .items .loader-big").hide();                    
                    console.log(res);
                    for(var i = 0; i < res.content.length; i++){
                        $(".gallery .items").append( components.galleryView( replaceNulls(res.content[i]) ) );
                    }
                    console.log(parseInt(res.totalPages, 10))
                    $(".gallery").append( components.pagination({count : parseInt(res.totalPages, 10), 
                            current : data.pageNo }) );
                })
            });
        </script>

    </head>

    <body>
        <div class = "root-container gallery">

            <div class = "topic-title"><span>Our Gallery</span></div>
            <div class = "items">
                <div class = "loader-big">
                    <div class = "spinner"></div>
                </div>
            </div>
        </div>
    </body>
</html>