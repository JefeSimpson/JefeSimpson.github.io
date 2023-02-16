'use strict'

function min(a, b) {
    return (a >= b) ? b : a;
}

alert(min(2, 5));
alert(min(3, -1));
alert(min(1,1));

function pow(a, b) {
    return a ** b;
}

alert(pow(3, 2));
alert(pow(3, 3));
alert(pow(1, 100));