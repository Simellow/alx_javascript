#!/usr/bin/node
const request = require('request'); //importing the requst module 
const fs = require('fs'); //importing the file system module 


const urlToFetch = process.argv[2]; 
const filePath = process.argv[3]

if (!urlToFetch) {
    console.error('Usage: node fetch-and-save.js <URL>');
    process.exit(1);
  }
  
  // Make the request to fetch the content
  request(urlToFetch, (error, response, body) => {
    if (error) {
      console.error('Error fetching content:', error.message);
      return;
    }
  
    // Write the response body to the file
    fs.writeFileSync(filePath, body, 'utf-8');
    console.log(`${filePath}`);
  });
