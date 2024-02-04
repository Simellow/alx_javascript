#!/usr/bin/node
let counter = 0;
exports.addMeMaybe = function(number, theFunction) {
  counter++;
  theFunction(number);
}


