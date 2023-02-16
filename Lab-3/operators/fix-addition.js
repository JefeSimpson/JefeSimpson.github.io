'use strict';

let a = prompt("First number?", 1);
let b = prompt("Second number?", 2);

alert(+a + +b); // the problem is that a and b are strings, so adding + before var will fix it or Numbers()