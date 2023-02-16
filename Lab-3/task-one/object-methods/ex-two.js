'use strict';

let calculator = {
    read(a, b) {
        this.num1 = +a;
        this.num2 = +b;
    },
    sum() {
        return this.num1 + this.num2;
    },
    mul() {
        return this.num1 * this.num2;
    }
};

calculator.read(5, 3);
alert( calculator.sum() );
alert( calculator.mul() );