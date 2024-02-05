#!/usr/bin/node
const request = require('request'); //importing the requst module 

//We retrieve the URL to request from the command line arguments using process.argv[2]. Process.argv[2] specifically contains the URL we want to fetch. 
//side note process.argv[0] is the path to the Node.js executable, and process.argv[1] is the path to the script itself.
const urlToRequest = process.argv[2]; 


//We use the request() function to make a GET request to the specified URL
request(urlToRequest, (error, response) => {
    //If there’s an error, we log an error message using console.error('Error:', error.message)
    if (error) {
        console.error('Error:', error.message);
    //Else we log the status code of the response using console.log(code: ${response.statusCode}).
    } else {
        console.log(`code: ${response.statusCode}`);
    }
});
