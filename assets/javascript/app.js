// NEW YORK TIMES 
function loadArticle() {
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=computer&coding&api-key=iXxrB5IFdP1u6aNOnFTRt1J9L3jYnjBJ"
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (results) {
        console.log(results)
// Pulls in the image associated with a certain article
        var article = results.response.docs;
        for (var i = 0; i < article.length; i++) {
            // console.log(article[i])
            // console.log(article)
        //     var artURL = article[i].multimedia;
        //     // console.log(artURL)
        //     // console.log(article[i].web_url);
        //     for (var j = 0; j < artURL.length; j++) {
        //         var picture = artURL[j];
        //     }
        //     var imgURL = picture.url;
            
            
          
             
        //     }
        // // $("#nytArticle").html("<img src='imgURL'>");
        // console.log(image)
    
// Pull in the headline for the article
            var headline = article[i].headline.main;
            // console.log(headline);
            var articleURL = article[i].web_url;
            console.log(articleURL);
            

            
            
            $("#nytArticle").append("<ul>", articleURL, headline)

            
            
            
            
            
            
            
            
            
    


        
    
        }
    })
}


$(document).ready(loadArticle);









