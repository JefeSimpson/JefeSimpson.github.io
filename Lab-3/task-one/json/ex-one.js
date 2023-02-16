'use strict';

let user = {
    name: "John Smith",
    age: 35
};

let mew = JSON.parse(JSON.stringify(user));

let room = {
    number: 23
};

let meetup = {
    title: "Conference",
    occupiedBy: [{name: "John"}, {name: "Alice"}],
    place: room
};

// circular references
room.occupiedBy = meetup;
meetup.self = meetup;

alert( JSON.stringify(meetup, function replacer(key, value) {
    /* your code */
    return (key == 0 && value != meetup) ? value : undefined;
}));

/* result should be:
{
  "title":"Conference",
  "occupiedBy":[{"name":"John"},{"name":"Alice"}],
  "place":{"number":23}
}
*/