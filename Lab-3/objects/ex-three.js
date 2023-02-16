'use strict';

function objectSum(salaries) {
    let sum = 0;
    for (let property in salaries) {
        sum += salaries[property];
    }
    return sum;
}

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
};

alert(objectSum(salaries));
let g = 2;
alert(typeof 2);