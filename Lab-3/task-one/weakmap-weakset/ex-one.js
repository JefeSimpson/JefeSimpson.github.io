'use strict';

let ws = new WeakSet();

let messages = [
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}
];

ws.add(messages[2]);
ws.add(messages[2]);
ws.add(messages[1]);
ws.add(messages[1]);
ws.add(messages[0]);

let wm = new WeakMap();

wm.set(messages[2], new Date(2096, 1, 15));