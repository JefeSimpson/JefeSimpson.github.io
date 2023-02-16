'use strict';

function Accumulator(value) {
    this.value = value;

    this.read = function () {
        let newValue = Number(prompt('New value: ', 0));
        this.value += newValue;
    }
}

let accumulator = new Accumulator(1); // initial value 1

accumulator.read(); // adds the user-entered value
accumulator.read(); // adds the user-entered value

alert(accumulator.value); // shows the sum of these values