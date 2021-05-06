<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>  

<html>
    <head>
        <title>Moderator Dasboard</title>
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
                    <c:forEach var = "i" begin = "0" end = "2">
                        <c:set var = "man" scope = "request" value = "${list.get(i)}"/>
                        <%@include file="payment.jsp" %>
                    </c:forEach>
                </div>
            </div>
        </div>
    </body>
</html>