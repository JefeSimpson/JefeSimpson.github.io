'use strict';

function sumSalary(salaries) {
    let sum = 0;

    for (let el of Object.values(salaries)) sum += el;

    return sum;
}

function counter(obj) {
    // return Object.values(obj).length;
    return Object.keys(obj).length;
}