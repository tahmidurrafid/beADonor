<!DOCTYPE html>

<html>
    <head>
        <title>Be A donor - Login</title>
        <%@ include file="../meta.jsp" %>
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
                            <input type = "text" placeholder="Enter Email"/>
                        </div>
                        <div class = "elem">
                            <input type = "password" placeholder="Your password"/>
                        </div>
                        <div class = "elem">
                            <input type = "text" placeholder="Full Name"/>
                        </div>
                        <div class = "line">
                            <div class = "elem half">
                                <input type = "text" placeholder="Choose Borthdate" />
                            </div>
                            <div class = "elem half">
                                <select>
                                    <option disabled selected>Blood Group</option>
                                    <option>O+</option>
                                    <option>B+</option>
                                    <option>C+</option>
                                </select>
                            </div>
                        </div>
                        <div class = "line">
                            <div class = "elem half">
                                <select>
                                    <option selected disabled>Choose District</option>
                                    <option>Dhaka</option>
                                </select>
                            </div>
                            <div class = "elem half">
                                <select>
                                    <option selected disabled>Choose Area</option>
                                    <option>Khilgaon</option>
                                </select>
                            </div>
                        </div>
                        <div class = "elem">
                            <input type = "text" placeholder="address" />
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