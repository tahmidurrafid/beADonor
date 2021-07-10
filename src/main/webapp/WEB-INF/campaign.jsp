<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>  

<html>
    <head>
        <title>Be A Donor</title>
    </head>

    <body>
        <div class = "root-container campaigns">
            <div class = "topic-title"><span>Please Help</span></div>
            <div class = "items">
                <c:forEach var = "i" begin = "1" end = "5">
                    <div class = "item">
                        <div class = "item-wrapper">
                            <div class = "title">Campaign title goes here</div>
                            <div class = "brief">
                                Here goes some brief for the campaign. ABCD Hi hello. It is good.
                                Here goes some brief for the campaign. ABCD Hi hello. It is good.
                            </div>
                            <div class = "camp-progress">
                                <div class = "bar-line">
                                    <div class = "bar">
                                        <div class = "full">
                                            <div class = "fraction"></div>
                                        </div>
                                    </div>
                                    <div class = "percentage">
                                        40%
                                    </div>
                                </div>
                                <div class = "target">
                                    Target: 25,24400 Taka 
                                </div>                                
                            </div>
                            <div class = "buttons">
                                <div class = "left">
                                    <a>
                                        Donate
                                    </a>
                                </div>
                                <div class = "right">
                                    <a>
                                        More Details
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>
                </c:forEach>
            </div>
        </div>
    </body>
</html>