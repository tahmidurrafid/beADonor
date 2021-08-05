
<!DOCTYPE html>

<html>
    <head>
        <title> <sitemesh:write property='title'/> </title>
        <%@ include file="meta.jsp" %>   
        <sitemesh:write property='head'/>
    </head>

    <body>
        <nav>
            <a class = "logo" href = "/">
                <img src = "/images/logo.svg"/>
            </a>

            <div class = "menu">
                <div class = "items">
                    <a class = "selected" href = "/"><span>Home</span></a>
                    <a href = "/campaign/1"><span>Donations</span></a>
                    <a href = "/user/requests/create/1"><span>Need Help?</span></a>
                    <a href = "/gallery/1/"><span>Gallery</span></a>
                    <a href = "/about"><span>About Us</span></a>
                    <a href = "/donors"><span>Donors</span></a>
                </div>
            </div>
            <div class = "user-nav">
                <div class = "log-reg">
                    <a href = "/auth/login">Login</a>
                    <a href = "/auth/registration">Register</a>
                </div>
                <div class = "settings hide-It" href= "#">
                    <a href = "#" class = "dp">
                        <div class = "dp-icon">
                            <img src = "/images/profile-photo.png" />
                        </div>
                    </a>
                    <div class = "dropdown hide-It">
                        <div class = "item for-moderator" style = "display: none;">
                            <a href = "/moderator/dashboard"><i class = "fa fa-user-plus"></i>Moderator</a>
                        </div>
                        <div class = "item for-user" style = "display: none;">
                            <a href = "/user/dashboard"><i class = "fa fa-dashboard"></i>Dashboard</a>
                        </div>
                        <div class = "item">
                            <a href = "/user/profile"><i class = "fa fa-user-circle"></i>Profile</a>
                        </div>
                        <div class = "item">
                            <a href = "/bloodDonate"><i class = "fa fa-tint"></i>Donate Blood</a>
                        </div>
                        <div class = "item">
                            <a href = "/logout"><i class = "fa fa-sign-out"></i>Logout</a>
                        </div>
                    </div>
                </div>
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
                            <span class = "val">+8801762152303</span>
                        </div>
                        <div class = "box">
                            <span class = "label">EMAIL</span>
                            <span class = "val">amtrafid@gmail.com</span>
                        </div>
                        <div class = "box">
                            <span class = "label">Address</span>
                            <span class = "val">1398/23/2 Future Point 1,<br/>
                            Reazbagh, Dhaka, Bangladesh</span>
                        </div>
                    </div>
                </div>
                <div class = "item mid">
                    <div class = "caption" >
                        <span>Site Links</span>
                    </div>
                    <div class = "links">
                        <div class = "link" ><a href = "/campaign/1">Donation</a></div>
                        <div class = "link" ><a href = "/gallery/1">Gallery</a></div>
                        <div class = "link" ><a href = "/donors">Top Donors</a></div>
                        <div class = "link" ><a href = "/user/requests/create/1">Need Help?</a></div>
                        <div class = "link" ><a href = "/about">About Us</a></div>
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
                                <a href = "https://www.facebook.com/tahmidurrafid.rhythm"> <i class = "fa  fa-facebook-official"></i> </a>
                                <a href = "https://github.com/tahmidurrafid"> <i class = "fa  fa-github"></i> </a>
                                <a href = "https://www.instagram.com/tahmidurrafid/"> <i class = "fa  fa-instagram"></i> </a>
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