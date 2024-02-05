#!/usr/bin/node
const request = require('request'); //importing the requst module 

// Star Wars API URL
const apiUrl = `https://swapi-api.alx-tools.com/api/films/`;

request (apiUrl, (error, response, body) =>{
     
    //Inside the callback, we check if there’s an error. If so, we log an error message
    if (error) {
        console.error('Error:', error.message);
    
    //
    } else {
        try {
            const moviesInfo = JSON.parse(body);
            const moviesWithWedge = moviesInfo.results.filter(film =>
                film.characters.includes(`https://swapi-api.alx-tools.com/api/people/${characterId}/`)
            );
            console.log(`${moviesWithWedge.length}`);
        } catch (parseError) {
            console.error('Error parsing response:', parseError.message);
        }
    }
});









// Write a script that prints the number of movies where the character “Wedge Antilles” is present.

// The first argument is the API URL of the Star wars API: https://swapi-api.alx-tools.com/api/films/
// Wedge Antilles is character ID 18 - your script must use this ID for filtering the result of the API
// You must use the module request