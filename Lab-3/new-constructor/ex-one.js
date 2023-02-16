'use strict';

function Calculator() {
    this.read =  function() {
        this.a = Number(prompt('a value: ', 0));
        this.b = Number(prompt('b value: ', 0));
    };
    this.sum = function () {
        return this.a + this.b;
    };
    this.mul = function () {
        return this.a * this.b;
    };
}

let calculator = new Calculator();
calculator.read();

alert('Sum=' + calculator.sum());
alert('Mul=' + calculator.mul());