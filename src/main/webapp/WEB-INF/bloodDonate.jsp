<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>  

<html>
    <head>
        <title>Be A Donor</title>

        <script type = "text/javascript">
            importJs('/js/Component/bloodDonate.js');
            
            $(document).ready(function(){
                ajaxGet("bloodDonation", (res) => {
                    $(".root-container .items .loader-big").hide();
                    console.log("INSIDE" , res);
                    for(var i = 0; i < res.content.length; i++){
                        $(".blood-donation .items").append( components.bloodDonate(  res.content[i] ) );
                    }
                })
            });
        </script>

    </head>

    <body>
        <div class = "root-container blood-donation">
            <div class = "topic-title"><span>Donate Blood</span><span class = "sub">Pending Donation Requests</span></div>
            <div class = "container">
                <div class = "items">
                    <div class = "loader-big">
                        <div class = "spinner"></div>
                    </div>
                </div>
            </div>

        </div>
    </body>
</html>