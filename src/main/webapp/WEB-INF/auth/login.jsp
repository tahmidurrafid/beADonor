<!DOCTYPE html>

<html>
    <head>
        <title>Be A donor - Login</title>
        <%@ include file="../meta.jsp" %>
    </head>

    <body>
        <div id = "login" class = "auth">
            <div class = "floating">
                <div class = "card-item">
                    <div class = "logo">
                        <img src = "/../images/logo.svg" />
                    </div>
                    <h3>Login to beADonor</h3>                    
                    <form method = "POST">
                        <input type = "text" name = "username" placeholder="Enter Email"/>
                        <input type = "password" name = "password" placeholder="Your password"/>

                        <div class = "line">
                            <div class = "elem half">
                            </div>
                            <div class = "elem half toRight">
                                <button type = "submit" class = "button solid small white noAction">Login</button>
                                <!-- <submit class = "button solid small white noAction">Login</submit> -->
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </body>
</html>