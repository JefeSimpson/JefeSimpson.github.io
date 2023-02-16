'use strict';

function multiplyNumeric(menu) {
    for (let property in menu) {
        if (typeof menu[property] == "number") {
            menu[property] *= 2;
        }
    }

}

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

multiplyNumeric(menu);
alert(String(menu.width) + " " + String(menu.height) + " " +  menu.title);
// after the call
// menu = {
//     width: 400,
//     height: 600,
//     title: "My menu"
// };