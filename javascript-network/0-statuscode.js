#!/usr/bin/node
const request = require('request'); 

const urlToRequest = process.argv[2]; 

request(urlToRequest, (error, response) => {
    if (error) {
        console.error('Error:', error.message);
    } else {
        console.log(`code: ${response.statusCode}`);
    }
});
