document.addEventListener('DOMContentLoaded', function(){
    let urlAPI = "https://api.breakingbadquotes.xyz/v1/quotes";
    let container = document.getElementById("quotes");
    let btnSearch = document.getElementById("btnSearch");

    btnSearch.addEventListener("click", function(){
        fetch(urlAPI)
        .then((response) => response.json())
        .then((data) => show(data[0]))
        .catch((error) => {
            console.error('Failed to displaying phrase: ', error);
            container.innerHTML = "Failed to displaying phrase.";
        });
    })

    function show(data)
    {
        const result = document.createElement("div");
        result.className = "result";
        const quote = data.quote;
        const author = data.author;
        container.innerHTML = "";
        result.innerHTML = `
        <p id="quote"> quote: "${quote}" </p>
        <p id="author"> author: "${author}" </p>
        `;
        console.log('no');
        container.appendChild(result);
    }
});