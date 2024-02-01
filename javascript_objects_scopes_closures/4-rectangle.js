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
    rotate(){
        //Using array destructuring to exchange width and height of the rectangle
        [this.width, this.height] = [this.height, this.width];
    }

    double(){
        this.width = this.width * 2;
        this.height = this.height * 2
    }
}
module.exports = Rectangle;


// Create an instance method called rotate() that exchanges the width and the height of the rectangle
// Create an instance method called double() that multiples the width and the height of the rectangle by 2