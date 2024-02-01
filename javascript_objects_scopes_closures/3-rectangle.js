#!/usr/bin/node
//writing a class Rectangle that defines a rectangle
class Rectangle {
    constructor (w, h){
        if (w && h > 0){
        this.width = w;
        this.height = h;
        }
    }
    //instance method print that prints the rectangle using the character X
    print() {
        for (let i = 0; 
            i < this.height; 
            i++) {
            console.log('X'.repeat(this.width));
        }
    }
}
module.exports = Rectangle;


// Create an instance method called print() that prints the rectangle using the character X