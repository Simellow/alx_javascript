#!/usr/bin/node
const request = require('request'); 

const apiUrl = 'https://swapi-api.alx-tools.com/api/films/';

const id = 18;

request.get(apiUrl, (error, response, body) => {
    if (error) {
        console.error('Error:', error.message);
    } else {
            const filmsData = JSON.parse(body);
            for (let i = 0; filmsData.results[i] !== undefined; i++) {
                if (filmsData.results[i].characters.includes(`https://swapi-api.alx-tools.com/api/people/${id}/`)) {
                  count++;
                }
              }
              console.log(count)
            }
     });

 