'use strict';

// function myFilter(arr, a, b) {
//     return arr.filter(item => (a <= item && item <= b));
// }
//
// function myFilterChanger(arr, a, b) {
//     for (let i = 0; i < arr.length; i++) {
//         if (a > arr[i] || b < arr[i]) {
//             arr.splice(i, 1);
//             i--;
//         }
//     }
// }

// let arr2 = [5, 2, 1, -10, 8];
// arr2.sort(function(a, b) { return a - b; });
// alert(arr2);
// alert("me");

function copySorted(arr) {
    return (arr.slice().sort());
}

let arr = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr);

alert( sorted ); // CSS, HTML, JavaScript
alert( arr ); // HTML, JavaScript, CSS (no changes)

function Calculator() {
    this.calculate = function (str) {
        let arr = str.split(" ");
        let a = +arr[0],
            b = +arr[2];
        let sign = arr[1];
        if (isNaN(a) || isNaN(b)) return NaN;
        if (sign === '+') {
            return a + b;
        }
        else if (sign === '-') {
            return a - b;
        }
        else {
            return;
        }
    }
}


let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let arr3 = [ pete, john, mary ];

arr3.sort(function(a, b) { return a.age - b.age; });

function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}

function getAverageByAge(obj) {
    return obj.reduce((sum, currentObj) => sum + currentObj.age, 0) / obj.length;
}

function unique(arr) {
    let arr1 = [];
    for (let el of arr) {
        if (arr1.indexOf(el) !== -1) {
            arr1.push(el);
        }
    }
    return arr1;
}
