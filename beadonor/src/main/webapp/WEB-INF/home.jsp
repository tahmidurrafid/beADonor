<%@ page import="javafx.util.Pair,java.util.List,java.util.ArrayList" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>  

<html>
    <head>
        <title>Be A Donor</title>
    </head>

    <body>
        <div id = "home">
            <div class = "cover">
                <div class = "background">
                    <div class = "overlay"></div>
                    <img src = "images/cover.jpg"/>
                </div>
    
                <div class = "content">
                    <h1>
                        Make The World <br/>
                        A Better <span class = "regular">Place</span>
                    </h1>
                    <p>Give your helping hand to those who need. </br/>
                        You little contribution might be enough to feed someone.</p>
                    <div class = "buttons">
                        <a class = "button solid" href = "#">
                            More About Us
                        </a>
                        <a class = "button flat" href = "#">
                            <span>Donate Now</span>
                            <i class = "fa fa-arrow-right"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div class = "section howto">
                <div class = "topic-title">
                    <span>How It Works?</span>
                </div>

                <div class = "work-seq">
                    <div class = "items">
                        <% 
                        Pair<String, String> boxes[] = new Pair[]{
                            new Pair<>("images/icons/006-advice.svg", "Ask For Help"),
                            new Pair<>("images/icons/003-role model.svg", "Our Moderator Reviews"),
                            new Pair<>("images/icons/009-trust.svg", "Somebody Helps"),
                            new Pair<>("images/icons/042-team.svg", "Make The World Better") 
                            };
                        for(Pair<String, String> box : boxes){
                        %>
                        <div class = "item">
                            <div class = "box">
                                <div class ="icon">
                                    <img src = "<% out.println(box.getKey()) ; %>"/>
                                </div>
                                <div class = "text">
                                    <% out.println(box.getValue()) ; %>
                                </div>                                
                            </div>
                        </div>
                        <% } %>
                    </div>
                </div>

            </div>

            <div class = "section inspire">
                <div class = "parts">
                    <div class = "left">
                        <h1>Become A Donor</h1>
                        <p>Help us to grow the curve upward.<br/>
                            Each individual donations might be small to you But all these make others happy.</p>
                        <a href = "#" class = "button solid white">
                            Donate Now
                        </a>
                    </div>
                    <div class = "right">
                        <img src = "images/image 2.png" />
                    </div>
                </div>
            </div>

            <div class = "section gallery">
                <div class = "topic-title">
                    <span>Our Gallery</span>
                </div>
                <div class = "items">
                    <% for(int i = 0; i < 4; i++){ %>
                    <div class = "item">
                        <img src = "images/gallery/1.jpg"/>
                        <div class = "overlay">
                            <div class = "content">
                                <div class = "text">
                                    Begging At Street
                                </div>
                                <div class = "location">
                                    <i class = "fa fa-map-marker"></i>
                                    <span>Malibag Railway, Dhaka</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <% } %>
                </div>
            </div>

        </div>
    </body>
</html>