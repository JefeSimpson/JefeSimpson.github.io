'use strict';

let user = { name: "John", years: 30 };

// your code to the left side:
// ... = user
let {name : name, years: age, isAdmin = false} = user;

alert( name ); // John
alert( age ); // 30
alert( isAdmin ); // false


function topSalary(salaries) {

    let maxSalary = 0;
    let maxName;

    for(const [name, salary] of Object.entries(salaries)) {
        if (maxSalary < salary) {
            maxSalary = salary;
            maxName = name;
        }
    }

    return maxName;
}

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};