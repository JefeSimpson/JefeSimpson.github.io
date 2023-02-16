'use strict';

let i = 0;
while (i != 10) {//the problem is with precision, it might be 10.00000004
    i += 0.2;
}