'use strict';

function uniqueFilter(arr) {
    let filterArr = Array.from(new Set(arr));
    return filterArr;
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

alert(uniqueFilter(values));

function sortedAnagram(arr) {
    let st = new Set();
    for (let el of arr) {
        let cor = el.toLowerCase()
            .split('')
            .sort()
            .join('');
        st.add(cor);
    }
    return st;
}

let map = new Map();

map.set("name", "John");

// let keys = map.keys(); // this is iterable, so have to return array;
let keys = Array.from(map.keys());
// Error: keys.push is not a function
keys.push("more");
