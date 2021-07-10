components.campaignRequest = function(state){
    
    return /*html*/`
<div class = "items">
    <div class = "item dpView expanded">
        <div class = "dp">
            <img src = "/attachments/dp/2.jpg" />
        </div>
        <div class = "details">
            <h4>
                Title goes here
            </h4>
            <div class = "bar">
                <h6>Category Name</h6>
                <h6>15-4-2021</h6>
            </div>
            <div class = "para small">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </div>
            <div class = "bar">
                <h5 class = "dash">By Tahmidur Rafid</h5>
            </div>
            <div class = "bar colap">
                <div class = "elem half">
                    <h5>Contact Details: </h5>
                    <table>
                        <tr>
                            <td>Name :</td>
                            <td>Md. Tahmidur Rafid</td>
                        </tr>
                        <tr>
                            <td>Phone : </td>
                            <td>01762152303</td>
                        </tr>
                        <tr>
                            <td>Address : </td>
                            <td>295/23/2 School Road<br />
                            Dhaka, Bangladesh
                            </td>
                        </tr>
                    </table>
                </div>
                <div class = "elem half">
                    <h5>Contact Details: </h5>
                    <table>
                        <tr>
                            <td>Name :</td>
                            <td>Md. Tahmidur Rafid</td>
                        </tr>
                        <tr>
                            <td>Phone : </td>
                            <td>01762152303</td>
                        </tr>
                        <tr>
                            <td>Address : </td>
                            <td>295/23/2 School Road<br />
                            Dhaka, Bangladesh
                            </td>
                        </tr>
                    </table>

                </div>
            </div>

            <div class = "elem colap">
                <h5>Attachments :</h5>
                <a class = "attach" href = "#">
                    <div class = "download">
                        <img src = "/images/fi-rr-cloud-download.svg" />
                    </div>
                    <div class = "name">
                        Attachment List
                    </div>
                </a>
            </div>
            <div class = "bar colap">
                <div class = "elem flex">

                </div>
                <div class = "elem flex">
                    <div class="fb-share-button" 
                    data-href="http://local.foo.com:8080/campaign/help" 
                    data-layout="button_count" data-size="large">
                    <a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&amp;src=sdkpreparse" class="fb-xfbml-parse-ignore">Share</a></div>
                </div>
            </div>

        </div>
    </div>            

</div>

    `    
}
components.campaignRequest.methods = {
    
}