"use strict";

function applyOperation(numbers, operation) {
    return numbers.map(operation);
}

const numbers = [1, 2, 3, 4];

const doubled = applyOperation(numbers, function(num) {
    return num * 2;
});

const squared = applyOperation(numbers, function(num) {
    return num * num;
});

console.log("Doubled:", doubled);
console.log("Squared:", squared);