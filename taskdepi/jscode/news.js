async function getNews(categoryy,countryy) {
    var apiKey = "pub_2283982ab4d947d4b71920348144cc1c";
    var category = categoryy;
    var country = countryy;
    var url = `https://newsdata.io/api/1/latest?apikey=${apiKey}&country=${country}&language=ar`;
    console.log(url);
    var response = await fetch(url);
    var data = await response.json();
    console.log(data);
    for (var i = 0; i < data.results.length; i++) {
        var newssec = document.createElement("section");
         newssec.classList.add('col-3');
     var news = `<img class="img-fluid" src="${data.results[i].image_url}">
            <article class="row mt-2">
                <p class="col-6">${data.results[i].pubDate}</p>
                <p class="col-6">
                    <span class="badge bg-success float-end">${data.results[i].source_name}</span>
                </p>
            </article>
            <h4>${data.results[i].title}</h4>`
            newssec.innerHTML = news;
            document.getElementById(`${categoryy}-news`).appendChild(newssec);
            



            

    

    }
    


}
var categoryy = "sports"; 
var countryy = "US";

getNews(categoryy ,countryy);
getNews("business" ,countryy);
getNews("entertainment",countryy);
getNews("health" ,countryy);

