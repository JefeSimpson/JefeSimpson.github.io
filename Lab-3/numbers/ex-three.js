'use strict';

function readNumber(num) {
    let a = num;

    do {
        a = prompt("Enter a number please?", 0);
    } while (!isFinite(a));
    if (a === null || a === '') {
        return null;
    }
    return a;
}

alert(readNumber(Infinity));