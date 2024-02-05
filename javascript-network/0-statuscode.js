#!/usr/bin/node
const request = require('request'); //importing the requst module 

const urlToRequest = process.argv[2]; //We retrieve the URL to request from the command line arguments using process.argv[2]. Process.argv[2] specifically contains the URL we want to fetch.


//We use the request() function to make a GET request to the specified URL. The callback function is called when the request completes. 
request(urlToRequest, (error, response) => {
    //If there’s an error, we log an error message using console.error('Error:', error.message)
    if (error) {
        console.error('Error:', error.message);
    //otherwise, we log the status code of the response using console.log(code: ${response.statusCode}).
    } else {
        console.log(`code: ${response.statusCode}`);
    }
});


