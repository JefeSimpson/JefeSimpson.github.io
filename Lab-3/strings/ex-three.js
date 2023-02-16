'use strict';

function truncate(str, maxLength) {
    if (str.length > maxLength) return str.substring(0, maxLength - 1) + "...";
    else return str;
}

