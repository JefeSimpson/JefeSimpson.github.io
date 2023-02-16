'use strict';

function isEmpty(schedule) {
    for (let property in schedule) { //
        return false; //
    }
    return true; //
}


let schedule = {};

alert( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

alert( isEmpty(schedule) ); // false