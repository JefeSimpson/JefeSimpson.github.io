'use strict';

function sumInput() {
    let arr = []
    while (1) {
        let data = prompt("Data: ", 0);
        if (data !== "" || data !== null || isFinite(data)) {
            arr.push(data);
        } else break;
    }
    let sum = 0;
    for (let el of arr) {
        sum += el;
    }
    return sum;
}

alert(sumInput())