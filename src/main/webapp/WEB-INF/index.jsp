
<!DOCTYPE html>

<html>
    <head>
        <title><sitemesh:write property='title'/></title>
        <%@ include file="meta.jsp" %>   
    </head>

    <body>
        <nav>
            <div class = "logo">
                <img src = "/images/logo.svg"/>
            </div>

            <div class = "menu">
                <div class = "items">
                    <a class = "selected" href = "#"><span>Home</span></a>
                    <a href = "#"><span>Donations</span></a>
                    <a href = "#"><span>Need Help?</span></a>
                    <a href = "#"><span>Gallery</span></a>
                    <a href = "#"><span>About Us</span></a>
                    <a href = "#"><span>Donors</span></a>
                </div>
            </div>
            <div class = "user-nav">
                <!-- <div class = "log-reg">
                    <a href = "#">Login</a>
                    <a href = "#">Register</a>
                </div> -->
                <a class = "settings"><img src = "/images/profile-photo.png" /></a>
            </div>
        </nav>

        <section>
            <sitemesh:write property='body'/>
        </section>

        <section class = "footer">
            <div class = "wrapper">
                <div class = "item left">
                    <div class = "caption" ><span>Find US</span></div>                
                    <div class = "infos">
                        <div class = "box">
                            <span class = "label">Phone</span>
                            <span class = "val">+8801762111010</span>
                        </div>
                        <div class = "box">
                            <span class = "label">EMAIL</span>
                            <span class = "val">support@iclp.com</span>
                        </div>
                        <div class = "box">
                            <span class = "label">Address</span>
                            <span class = "val">1365/54/7 Karwan Bazar Avenue,<br/>
                            Dhaka -1000, Bangladesh</span>
                        </div>
                    </div>
                </div>
                <div class = "item mid">
                    <div class = "caption" >
                        <span>Site Links</span>
                    </div>
                    <div class = "links">
                        <div class = "link" ><a href = "#">Donation</a></div>
                        <div class = "link" ><a href = "#">Gallery</a></div>
                        <div class = "link" ><a href = "#">Top Donors</a></div>
                        <div class = "link" ><a href = "#">Need Help?</a></div>
                        <div class = "link" ><a href = "#">About Us</a></div>
                    </div>
                </div>
                <div class = "item right">
                    <div class = "wrap">
                        <div class = "logo">
                            <img src = "/images/logo-light.svg" />
                        </div>
                        <div class = "social">
                            <div class = "text">Follow us on</div>
                            <div class = "links">
                                <a href = "#"> <i class = "fa  fa-facebook-official"></i> </a>
                                <a href = "#"> <i class = "fa  fa-github"></i> </a>
                                <a href = "#"> <i class = "fa  fa-instagram"></i> </a>
                                <a href = "#"> <i class = "fa  fa-linkedin-square"></i> </a>
                            </div>                        
                        </div>
                    </div>
                </div>
            </div>
            <div class = "copy">
                Copyright 2021-2021 by Group 2 | All Rights Reserved.     
            </div>
        </section>
    </body>
</html>