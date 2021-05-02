<%@ page import="javafx.util.Pair" %>
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
                    <div class = "content">
                        <div class = "tab">
                            <a href = "#" class = "selected">Pending Review</a>
                            <a href = "#">Marked</a>
                            <a href = "#">On Going</a>
                            <a href = "#">Archived</a>
                        </div>
                        <div class = "topic-content">
                            <div class = "items">
                                <div class = "item request">
                                    <div class = "dp">
                                        <img src = "/images/dp.png" />
                                    </div>
                                    <div class = "details">
                                        <h4>
                                            Your Request Title Goes Here
                                        </h4>
                                        <div class = "bar">
                                            <h6>Critical Medical Issue</h6>
                                            <h6>30 April, 2021</h6>
                                        </div>
                                        <div class = "para small">
                                            Little Bit of the description. Lorem ipsum dolor sit amet. I am going to writing something here. But I actually don't know what to write. I am just filling the content area. Little Bit of the description. Lorem ipsum dolor sit amet. I am going to writing something here. But I actually don't know what to write. I am just filling the content area.Little Bit of the description. Lorem ipsum dolor sit amet. I am going to writing something here. But I actually don't know what to write. I am just filling the content area. Little Bit of the description. Lorem ipsum dolor sit amet. I am going to writing something here. But I actually don't know what to write. I am just filling the content area.Little Bit of the description. Lorem ipsum dolor sit amet. I am going to writing something here. But I actually don't know what to write. I am just filling the content area. Little Bit of the description. Lorem ipsum dolor sit amet. I am going to writing something here. But I actually don't know what to write. I am just filling the content area.
                                        </div>
                                        <div class = "bar">
                                            <h5 class = "dash">By Tahmidur Rafid</h5>
                                            <a class = "button solid small white">
                                                View Details
                                            </a>
                                        </div>
                                        <div class = "bar">
                                            <div class = "elem">
                                                <h5>Contact Details: </h5>
                                                <table>
                                                    <tr>
                                                        <td>Name: </td>
                                                        <td>Md. Tahmidur Rafid</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Phone</td>
                                                        <td>+8801521416349</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Name: </td>
                                                        <td>1232/43/34 Shere bangla sharak <br />
                                                            Dhaka, Bangladesh.</td>
                                                    </tr>
                                                </table>
                                            </div>
                                            <div class = "elem">
                                                <h5>Contact Details: </h5>
                                                <table>
                                                    <tr>
                                                        <td>Name: </td>
                                                        <td>Md. Tahmidur Rafid</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Phone</td>
                                                        <td>+8801521416349</td>
                                                    </tr>
                                                </table>
                                            </div>
                                        </div>

                                        

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </body>
</html>