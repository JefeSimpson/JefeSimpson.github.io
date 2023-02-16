'use strict';

let login = prompt("Who's there?: ", '');

if (login === 'Admin') {
    let password = prompt("Password?: ", '');
    if (password === 'TheMaster') alert("Welcome!");
    else if (password === '') alert("Canceled");
    else alert("Wrong password");
} else if (login === '') {
    alert("Canceled");
} else {
    alert("I don't know you");
}