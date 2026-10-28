"use strict";

console.log("Start");

// setTimeout callback is a macrotask
setTimeout(() => {
    console.log("Macrotask: setTimeout");
}, 0);

// Promise.then callback is a microtask
Promise.resolve().then(() => {
    console.log("Microtask: Promise");
});

console.log("Synchronous log");
console.log("End");

