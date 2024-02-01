#!/usr/bin/node
//writing a class Rectangle that defines a rectangle
class Rectangle {
    constructor (w, h){
        if (w && h > 0){
        this.width = w;
        this.height = h;
        }
    }
}

module.exports = Rectangle;


// If w or h is equal to 0 or not a positive integer, create an empty object