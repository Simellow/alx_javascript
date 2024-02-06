#!/usr/bin/node

const request = require('request');

const movieID = process.argv[2]; 

const starWarsUri = `https://swapi-api.alx-tools.com/api/films/${movieID}`;

request(starWarsUri, function (_error, request, body) {
  const characters = JSON.parse(body).characters;

  for (let i = 0; i < characters.length; ++i) {
    request(characters[i], function (_cError, _cRequest, _cBody) {
      console.log(JSON.parse(cBody).name);
    });
  }
});