'use strict';

let login = prompt('What is value of login: ', '');
let message = (login === 'Employee') ? 'Hello' : (login === 'Director') ? 'Greetings' : (login === '') ? 'No Login' : '';