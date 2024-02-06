#!/usr/bin/node
const request = require('request'); //importing the requst module 

// const film = process.argv[2]; 
// const apiUrl = `https://swapi-api.alx-tools.com/api/${film}`;

//API URL for Star Wars films
const apiUrl = 'https://swapi-api.alx-tools.com/api/films/';

// Character ID for Wedge Antilles
const characterId = 18;

// Make a GET request to the API
request(apiUrl, (error, response, body) => {
    if (error) {
        console.error('Error:', error.message);
    } else {
            const filmsData = JSON.parse(body);
            const matchingFilms = filmsData.results.filter(film =>
                film.characters.includes(`https://swapi-api.alx-tools.com/api/people/${characterId}/`)
            );
            console.log(`${matchingFilms.length}`);
         }
     });

     
// Write a script that prints the number of movies where the character “Wedge Antilles” is present.

// The first argument is the API URL of the Star wars API: https://swapi-api.alx-tools.com/api/films/
// Wedge Antilles is character ID 18 - your script must use this ID for filtering the result of the API
// You must use the module request