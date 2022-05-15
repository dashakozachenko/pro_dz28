'use strict';

const calculator = {

    read() {
        this.firstNum = +prompt('Input first num:', '2');
        this.secondNum = +prompt('Input second num:', '3');
    },

    sum() {
        if (isNaN(this.firstNum) || isNaN(this.secondNum)) {
           return console.log("Invalid value");
        }
        return this.firstNum + this.secondNum;
    },

    mul() {
        if (isNaN(this.firstNum) || isNaN(this.secondNum)) {
            return console.log("Invalid value");
        }
        return this.firstNum * this.secondNum;
    }
}

calculator.read();

console.log((calculator.sum()));
console.log((calculator.mul()));