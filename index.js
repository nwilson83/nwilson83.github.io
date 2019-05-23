//const baseURL = 'https://rickandmortyapi.com/api/character/';

fetch('https://rickandmortyapi.com/api/character/')

    .then(function(response) {
        return response.json();
    })
    .then(function(myJson) {
         console.log(myJson)
    })
