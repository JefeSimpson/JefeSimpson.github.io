'use strict';
let n = 50;
let isPrime;
alert("Its working");
for (let i = 2; i <= n; i++) {
    isPrime = true;
    for (let j = 2; j < i; j++) {
        if (i % j === 0) {
            isPrime = false;
            // continue;
        }
    }
    if (isPrime) alert(i);
}