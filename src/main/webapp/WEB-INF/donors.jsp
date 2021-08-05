<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>  

<html>
    <head>
        <title>Be A Donor</title>

        <script type = "text/javascript">
            importJs('/js/Component/donor.js');
            
            $(document).ready(function(){
                ajaxGet("static/rank", (res) => {
                    $(".root-container .items .loader-big").hide();
                    console.log("INSIDE" , res);
                    for(var i = 0; i < res.length; i++){
                        $(".donors .items").append( components.donor( res[i] ) );
                    }
                })
            });
        </script>

    </head>

    <body>
        <div class = "root-container donors">
            <div class = "topic-title"><span>Top Donors</span><span class = "sub">Top donors of the last 30 days</span></div>
            <div class = "items">
                <div class = "loader-big">
                    <div class = "spinner"></div>
                </div>
            </div>
        </div>
    </body>
</html>