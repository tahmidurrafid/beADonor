<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>  

<html>
    <head>
        <title>User Dasboard</title>
        <script type = "text/javascript" src = "/js/admin.dashboard.js"></script>
        <script type = "text/javascript">
        var link = "${link}";
        var data = {
            state : "${state}",
            page : "${page}"
        };
        $(document).ready(function(){
            console.log(link, data);
            var dashboardFactory = new DashboardFactory();
            dashboardFactory.create(link, data);
        })
        </script>     
    </head>

    <body>
        <div id = "dashboard">
            <div class = "layout">
                <div class = "left-bar">
                    <div class = "heading">
                        <img src = "/images/baricons/fi-rr-home.svg" /> <span>Dashboard</span>
                    </div>
                    <div class = "links">
                        <a href = "/admin/moderators">
                            <span class = "icon"><img src = "/images/baricons/fi-rr-cursor-finger.svg"/></span>
                            <span>Moderators</span>
                        </a>
                        <a href = "/admin/gallery">
                            <span class = "icon"><img src = "/images/baricons/009-trust.svg"/></span>
                            <span>Manage Gallery</span>
                        </a>
                        <a href = "/user/items">
                            <span class = "icon"><img src = "/images/baricons/fi-rr-shopping-cart-check.svg"/></span>
                            <span>Statistics</span>
                        </a>
                    </div>
                </div>

                <div class = "main-right">
                    <jsp:include page = "${link}.jsp" />
                </div>

            </div>
        </div>
    </body>
</html>