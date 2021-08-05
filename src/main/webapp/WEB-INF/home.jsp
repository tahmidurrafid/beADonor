<%@ page import="java.util.List,java.util.ArrayList" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>  

<html>
    <head>
        <title>Be A Donor</title>

        <script type = "text/javascript">
            $(document).ready( () => {
                console.log("Hello world");
                data = {
                    pageSize : 4,
                    pageNo : 1
                }
                ajaxGet("gallery?" + serializeBody(data), (res) => {
                    for(let i = 0; i < res.content.length; i++){
                        let item = res.content[i];
                        console.log(item)
                        $(".gallery .items").append(/*html*/`
                        <div class = "item">
                            <img src = "` + item.location + `"/>
                            <div class = "overlay">
                                <div class = "content">
                                    <div class = "text">
                                        ` + item.title + `
                                    </div>
                                    <div class = "location">
                                        <i class = "fa fa-clock-o"></i>
                                        <span>` + item.date + `</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        `)
                    }

                })
            })
        </script>

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
                        <a class = "button solid" href = "/about">
                            More About Us
                        </a>
                        <a class = "button flat" href = "/user/payments/create/1">
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

                        <div class = "item">
                            <div class = "box">
                                <div class ="icon">
                                    <img src = "images/icons/006-advice.svg"/>
                                </div>
                                <div class = "text">
                                    Ask For Help
                                </div>
                            </div>
                        </div>
                        <div class = "item">
                            <div class = "box">
                                <div class ="icon">
                                    <img src = "images/icons/003-role model.svg"/>
                                </div>
                                <div class = "text">
                                    Our Moderator Reviews
                                </div>
                            </div>
                        </div>
                        <div class = "item">
                            <div class = "box">
                                <div class ="icon">
                                    <img src = "images/icons/009-trust.svg"/>
                                </div>
                                <div class = "text">
                                    Somebody Helps
                                </div>
                            </div>
                        </div>
                        <div class = "item">
                            <div class = "box">
                                <div class ="icon">
                                    <img src = "images/icons/042-team.svg"/>
                                </div>
                                <div class = "text">
                                    Make The World Better
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>

            <div class = "section inspire">
                <div class = "parts">
                    <div class = "left">
                        <h1>Become A Donor</h1>
                        <p>Help us to grow the curve upward.<br/>
                            Each individual donations might be small to you But all these make others happy.</p>
                        <a href = "/user/payments/create/1" class = "button solid white">
                            Donate Now
                        </a>
                    </div>
                    <div class = "right">
                        <img src = "images/pexels-namo-deet-1098769.jpg" />
                    </div>
                </div>
            </div>

            <div class = "section gallery">
                <div class = "topic-title">
                    <span>Our Gallery</span>
                </div>
                <div class = "items">

                </div>
            </div>

        </div>
    </body>
</html>