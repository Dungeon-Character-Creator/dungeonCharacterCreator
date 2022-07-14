const url = "https://api.open5e.com/backgrounds/"
        
fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (jsonResult) {
            console.log(jsonResult);
        })