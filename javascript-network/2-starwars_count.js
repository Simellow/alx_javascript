#!/usr/bin/node
const request = require('request');

const url = process.argv[2];

const id = 18;

request.get(url, function (err, response, body) {
  let count = 0;
  if (err) {
    console.log(err);
  }
  const data = JSON.parse(body);
  for (let i = 0; data.results[i] !== undefined; i++) {
    if (data.results[i].characters.includes(`https://swapi-api.alx-tools.com/api/people/${id}/`)) {
      count++;
    }
  }
  console.log(count);
});

