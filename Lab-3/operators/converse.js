'use strict';

alert("" + 1 + 0 ); //from left to right, so '10'
alert("" - 1 + 0); //'' - 1 (- converts string to number),gives: (0 - 1 = -1) -> -1 + 0 = -1
alert(true + false); // 1 + 0 = 1
alert(6 / "3"); // (/ converts string to number), then 6 / 3 = 2
alert("2" * "3"); // "2" * "3" = 6(* converts to numbers)
alert(4 + 5 + "px"); //from left to right, 4 + 5 = 9 -> 9 + "px" = "9px" - result
alert("$" + 4 + 5); // '$' + 4 = '$4', -> '$4' + 5 = '$45' - result
alert("4" - 2); // answer is 2
alert("4px" - 2); // is NaN
alert("  -9  " + 5); // conversation 5 to string:   -9  5
alert("  -9  " - 5); // answers is -14
alert(null + 1); // null is 0
alert(undefined + 1); // undefined is NaN
alert(" \t \n" - 2); // answer is -2 \t and \n skips in conversation