'use strict';

function getMaxSubSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        let help = 0;
        for (let j = 0; j < arr.length; j++) {
            help += arr[j];
            sum = Math.max(help, sum);
        }
    }
    return sum;
}