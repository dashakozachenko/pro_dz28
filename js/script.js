'use strict';

const calculator = {

    read() {
        this.firstNum = +prompt('Input first num:', '2');
        this.secondNum = +prompt('Input second num:', '3');

        if(isNaN(this.firstNum) || isNaN(this.secondNum)) {
            return console.log( 'Invalid value')
        }
    },

    sum() {
        return this.firstNum + this.secondNum;
    },

    mul() {
        return this.firstNum * this.secondNum;
    }
}

calculator.read();

console.log((calculator.sum()));
console.log((calculator.mul()));