'use strict';

alert( null || 2 || undefined ); //will be 2
alert( alert(1) || 2 || alert(3) ); //1 and 2
alert( 1 && null && 2 ); // will be null, because it's false
alert( alert(1) && alert(2) ); // 1 with undefined
alert( null || 2 && 3 || 4 ); // first 2 && 3 -> 3 then the first truly value is 3, then it shows 3
