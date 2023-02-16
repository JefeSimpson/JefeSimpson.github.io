'use strict';

function checkSpam(str) {
    let upStr = str.toUpperCase(); // or to lower no diff
    return upStr.includes('VIAGRA') || upStr.includes('XXX');
}
//solution 