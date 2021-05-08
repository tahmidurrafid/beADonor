<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>  

<html>
    <head>
        <title>Moderator Dasboard</title>
        <script type = "text/javascript" src = "/js/dashboard.js"></script>
        <script type = "text/javascript">
        var link = "${link}";
        $(document).ready(function(){
            var dashboardFactory = new DashboardFactory();
            dashboardFactory.create(link);
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
                        <a href = "#">
                            <span class = "icon"><img src = "/images/baricons/fi-rr-cursor-finger.svg"/></span>
                            <span>Help Request</span>
                        </a>
                        <a href = "#">
                            <span class = "icon"><img src = "/images/baricons/009-trust.svg"/></span>
                            <span>Confirm Payment</span>
                        </a>
                        <a href = "#">
                            <span class = "icon"><img src = "/images/baricons/fi-rr-shopping-cart-check.svg"/></span>
                            <span>Confirm Items</span>
                        </a>
                        <a href = "#">
                            <span class = "icon"><img src = "/images/baricons/fi-rr-diploma.svg"/></span>
                            <span>Review Info</span>
                        </a>
                        <a href = "#">
                            <span class = "icon"><img src = "/images/baricons/fi-rr-stats.svg"/></span>
                            <span>Statistics</span>
                        </a>
                        <a href = "#">
                            <span class = "icon"><img src = "/images/baricons/048-success.svg"/></span>
                            <span>Send Gifts</span>
                        </a>
                        <a href = "#">
                            <span class = "icon"><img src = "/images/baricons/fi-rr-user.svg"/></span>
                            <span>Profile Settings</span>
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