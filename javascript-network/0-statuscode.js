#!/usr/bin/node
const request = require('request'); //importing the requst module 

//We retrieve the URL to request from the command line arguments using process.argv[2]. 
const urlToRequest = process.argv[2]; 

//We use the request() function to make a GET request to the specified URL
//within the request() functinon, we have an anonymous callback function with parameters error and response
request(urlToRequest, (error, response) => {
    //If there’s an error, we log an error message using console.error('Error:', error.message)
    if (error) {
        console.error('Error:', error.message);
    //Else we log the status code of the response 
    } else {
        console.log(`code: ${response.statusCode}`);
    }
});
