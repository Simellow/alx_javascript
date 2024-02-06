#!/usr/bin/node
const request = require('request'); //importing the requst module 

//We retrieve the URL to request from the command line arguments using process.argv[2].  
const movieID = process.argv[2]; 

//We create the complete API URL by appending the movie ID to the base URL (https://swapi-api.alx-tools.com/api/films/:id)
const apiUrl = `https://swapi-api.alx-tools.com/api/films/${movieID}`;

request(apiUrl, (error, response, body) => { //Inside this callback function, we have access to the response object, which contains information about the HTTP response

    //Inside the callback, we check if there’s an error. If so, we log an error message
    if (error) {
        console.error('Error:', error.message);

    } else if (response) {
        console.log(`code: ${response.statusCode}`);
        
    //Otherwise, we parse the response data using JSON.parse(body) and console.log the title 
    } else {
            const movieInfo = JSON.parse(body);
            console.log(`${movieInfo.title}`);
    }
});