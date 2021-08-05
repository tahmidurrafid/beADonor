<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>  

<html>
    <head>
        <title>Be A Donor</title>
        <div id="fb-root"></div>
        <meta property="og:title" content="your_link_title">
        <meta property="og:image" content="your_image_url">
        <script async defer crossorigin="anonymous" src="https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v11.0" nonce="ga83gQay"></script>
        <script>
            importJs('/js/Component/campaign/campaignRequest.js');
            $(document).ready(()=>{
                ajaxGet('campaign/${id}', (res) => {
                    $(".root-container .items").append(components.campaignRequest(res));
                })
            })
        </script>
    </head>

    <body>
        <div class = "root-container help-campaign">
            <div class = "topic-title">
                <span>Please Help</span>
            </div>
            <div class = "items">
            
            </div>
        </div>
    </body>
</html>