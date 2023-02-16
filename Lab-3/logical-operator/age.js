'use strict';

let age = Number(prompt('Write age: ', 0));

if (age >= 14 && age <= 90) {
    alert("In range");
} else alert("Not in range");

if (!(age >= 14 && age <= 90)) {
    alert("Not in range");
} else alert("In range");