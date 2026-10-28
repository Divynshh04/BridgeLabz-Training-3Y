"use strict";

const operations = ["add", "divide", "power", "root", "subtract"];
const num1 = 25;
const num2 = 0;
const operation = "divide";

try {
    let result;

    if (!operations.includes(operation)) {
        throw new Error("InvalidOperationError");
    }

    switch (operation) {
        case "add":
            result = num1 + num2;
            break;

        case "divide":
            if (num2 === 0) {
                throw new Error("DivisionByZeroError");
            }
            result = num1 / num2;
            break;

        case "power":
            result = Math.pow(num1, num2);
            break;

        case "root":
            if (num1 < 0) {
                throw new Error("NegativeRootError");
            }
            result = Math.sqrt(num1);
            break;

        case "subtract":
            result = num1 - num2;
            break;
    }

    console.log(`Operation: ${operation}`);
    console.log(`Numbers: ${num1}, ${num2}`);
    console.log(`Result: ${result}`);
} catch (error) {
    console.log("Operation:", operation);
    console.log("Error:", error.message);
}