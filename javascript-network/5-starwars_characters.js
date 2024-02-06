#!/usr/bin/node
const request = require('request'); 

const movieID = process.argv[2]; 

const apiUrl = `https://swapi-api.alx-tools.com/api/films/${movieID}`;


request.get(apiUrl, (error, request, body) => {
    if (error) {
        console.error(error.message);
    } else {
        const characters = JSON.parse(body).characters;
        for (let i = 0; i < characters.length; ++i) {
            request.get(characters[i], function (_cErr, _cRes, cBody) {
                console.log(JSON.parse(cBody).name);
            });
        }
    }
});