'use strict';

let arr = ["a", "b"];

arr.push(function() {
    alert( this );
});

arr[2](); // ? references arr + func 