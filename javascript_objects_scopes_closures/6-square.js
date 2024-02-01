#!/usr/bin/node
//inheriting
const Square = require('./5-square');

class Square extends baseSquare {
    charPrint(c){
        const charToPrint = c || 'X';
        for (let i = 0; i < this.size; i++) {
            console.log(charToPrint.repeat(this.size));
        }
    }
}







// Write a class Square that defines a square and inherits from Square of 5-square.js:

// You must use the class notation for defining your class and extends
// Create an instance method called charPrint(c) that prints the rectangle using the character c
// If c is undefined, use the character X