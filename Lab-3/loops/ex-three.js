'use strict';

for (let i = 0; i < 5; i++) alert( i );
//answer for both loops will be same, because iteration happens last(after alert), then condition check again starts.
for (let i = 0; i < 5; ++i) alert( i );