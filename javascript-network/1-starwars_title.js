#!/usr/bin/node
const request = require('request'); //importing the requst module 

//We retrieve the URL to request from the command line arguments using process.argv[2].  
const movieID = process.argv[2]; 

//We create the complete API URL by appending the movie ID to the base URL (https://swapi-api.alx-tools.com/api/films/:id)
const apiUrl = `https://swapi-api.alx-tools.com/api/films/${movieID}`;

//The request() function is called with the Star Wars API URL(apiUrl) as the first argument.The second argument to request() is an anonymous callback function
request(apiUrl, (error, response, body) => {
//side note, the response parameter in the callback contains information about the HTTP response, including status code, headers, and more. The response.statusCode is not explicitly mentioned in the code snippet, but it’s implicitly used within the request() callback. 

// side note 2 In the context of HTTP requests, body typically refers to the content of the request or response. When making an HTTP request (e.g., using fetch(), request, or other libraries), you can include a request body (data you send to the server) or receive a response body (data received from the server).

    //Inside the callback, we check if there’s an error. If so, we log an error message
    if (error) {
        console.error('Error:', error.message);
    //Otherwise, we parse the response data using JSON.parse(body). JSON.parse() is used to parse (or convert) a JSON string into a JavaScript object
    } else {
        try {
            const movieInfo = JSON.parse(body);
            console.log(`${movieInfo.title}`);
        //In the code snippet, parseError is a variable representing an error that occurs during parsing (specifically, when trying to parse the response data as JSON).
        } catch (parseError) {
            // The .message property is a standard property available on JavaScript Error objects. When an error occurs (such as a parse error), the message property contains a human-readable description of the error.
            console.error('Error parsing response:', parseError.message);
        }
    }
});