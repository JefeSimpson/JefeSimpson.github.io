'use strict';

// let result;
//
// if (a + b < 4) {
//     result = 'Below';
// } else {
//     result = 'Over';
// }
let a = (prompt('Value of a: ', 0));
let b = (prompt('Value of b: ', 0));
let result = (+a + +b < 4) ? 'Below' : 'Over';
alert(result);