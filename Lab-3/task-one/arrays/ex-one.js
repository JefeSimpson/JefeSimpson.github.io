'use strict';

let fruits = ["Apples", "Pear", "Orange"];

// push a new value into the "copy"
let shoppingCart = fruits;
shoppingCart.push("Banana");

// what's in fruits?
alert(fruits)
alert( fruits.length ); // same reference, so 4
alert(shoppingCart.length); // 4