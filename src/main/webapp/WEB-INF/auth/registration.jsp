<!DOCTYPE html>

<html>
    <head>
        <title>Be A donor - Login</title>
        <%@ include file="../meta.jsp" %>

        <script type = "text/javascript" src = "/js/auth.js"></script>

    </head>

    <body>
        <div id = "registration" class = "auth">
            <div class = "floating">
                <div class = "card-item">
                    <div class = "logo">
                        <img src = "/../images/logo.svg" />
                    </div>
                    
                    <h3>Create Account</h3>                    
                    <form>
                        <div class = "elem">
                            <input type = "text" name = "email" placeholder="Enter Email"/>
                        </div>
                        <div class = "elem">
                            <input type = "password" name = "password" placeholder="Your password"/>
                        </div>
                        <div class = "elem">
                            <input type = "text" name = "name" placeholder="Full Name"/>
                        </div>
                        <div class = "line">
                            <div class = "elem half">
                                <input type = "text" name = "birthDate" placeholder="Choose Borthdate" />
                            </div>
                            <div class = "elem half">
                                <select name = "bloodGroup" data-bind="bloodGroup">
                                    <option disabled selected class = "default">Blood Group</option>
                                </select>
                            </div>
                        </div>
                        <div class = "group contact" data-group = "contact" data-action = "auto_contact">
                            <div class = "line">
                                <div class = "elem half">
                                    <select name = "district" data-bind = "district">
                                        <option selected disabled class = "default">Choose District</option>

                                    </select>
                                </div>
                                <div class = "elem half">
                                    <select name = "area_id" data-bind = "area">
                                        <option selected disabled class = "default">Choose Area</option>
                                        <option>Khilgaon</option>
                                    </select>
                                </div>
                            </div>
                            <div class = "elem" name = "address">
                                <input type = "text" placeholder="address" />
                            </div>
                            <div class = "elem">
                                <input type = "text" name = "address" placeholder="Phone No." />
                            </div>                            
                        </div>
                        <div class = "elem left">
                            <input type = "checkbox" name = "donate" value = "I am ready to donate blood" />
                            <label for = "donate">I am ready to doante blood</label>
                        </div>
                        <div class = "line">
                            <div class = "elem half">
                            </div>
                            <div class = "elem half">
                                <submit class = "button solid small white">Submit</submit>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </body>
</html>