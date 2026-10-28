"use strict";

const apiData = ["25", "true", "false", "NaN", " ", "100px", "3.14", null, undefined];

let validNumbers = [];
let invalidNumbers = [];

for (let value of apiData) {
    let numberValue = Number(value);
    let booleanValue = Boolean(value);
    let stringValue = String(value);

    if (
        value === null ||
        value === undefined ||
        (typeof value === "string" && value.trim() === "") ||
        Number.isNaN(numberValue)
    ) {
        invalidNumbers.push(value);

        console.log(
            `Invalid: ${stringValue} | Number: ${numberValue} | Boolean: ${booleanValue}`
        );
    } else {
        validNumbers.push(numberValue);

        console.log(
            `Valid: ${stringValue} | Number: ${numberValue} | Boolean: ${booleanValue}`
        );
    }
}

console.log("Valid Numbers:", validNumbers);
console.log("Invalid Values:", invalidNumbers);
console.log("Valid Count:", validNumbers.length);
console.log("Invalid Count:", invalidNumbers.length);