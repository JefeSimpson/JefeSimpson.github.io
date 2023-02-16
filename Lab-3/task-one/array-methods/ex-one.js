'use strict';

function camelize(str) {
    let arr = str.split('-');
    for (let i = 0; i < arr.length; i++) {
        (i != 0) ? arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1): arr[i];
    }
    return arr.join('');
}

alert(camelize("background-color"));
alert(camelize("list-style-image"));
alert(camelize("-webkit-transition"));