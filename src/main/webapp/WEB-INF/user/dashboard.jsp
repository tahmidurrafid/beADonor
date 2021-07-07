<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>  

<html>
    <head>
        <title>User Dasboard</title>
        <script type = "text/javascript" src = "/js/user.dashboard.js"></script>
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
                        <a href = "/user/requests">
                            <span class = "icon"><img src = "/images/baricons/fi-rr-cursor-finger.svg"/></span>
                            <span>Help Request</span>
                        </a>
                        <a href = "/user/payments">
                            <span class = "icon"><img src = "/images/baricons/009-trust.svg"/></span>
                            <span>Make Payment</span>
                        </a>
                        <a href = "/user/items">
                            <span class = "icon"><img src = "/images/baricons/fi-rr-shopping-cart-check.svg"/></span>
                            <span>Donate Items</span>
                        </a>
                        <a href = "/user/info">
                            <span class = "icon"><img src = "/images/baricons/fi-rr-diploma.svg"/></span>
                            <span>Submit Info</span>
                        </a>
                        <a href = "statistics">
                            <span class = "icon"><img src = "/images/baricons/fi-rr-stats.svg"/></span>
                            <span>Statistics</span>
                        </a>
                        <a href = "/user/gifts">
                            <span class = "icon"><img src = "/images/baricons/048-success.svg"/></span>
                            <span>Send Gifts</span>
                        </a>
                        <a href = "/user/profile">
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