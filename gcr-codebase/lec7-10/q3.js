"use strict";

const transactions = [
    { id: 1, amount: 2000 },
    { id: 2, amount: -500 },
    { id: 3 },
    null
];

const valid = [];
const invalid = [];

for (let i = 0; i < transactions.length; i++) {
    try {
        const transaction = transactions[i];

        if (transaction === null) {
            throw new Error("NULL_ENTRY");
        }

        if (transaction.id == null || transaction.amount == null) {
            throw new Error("MISSING_PROPERTY");
        }

        if (transaction.amount < 0) {
            throw new Error("NEGATIVE_AMOUNT");
        }

        valid.push(transaction);
        console.log(`Transaction ${transaction.id}: Valid`);
    } catch (error) {
        invalid.push({
            entry: transactions[i],
            line: i + 1,
            reason: error.message
        });

        console.log(`Entry ${i + 1}: ${error.message}`);
    }
}

console.log("Valid Transactions:", valid);
console.log("Invalid Transactions:", invalid);
console.log("Successful Count:", valid.length);
console.log("Failed Count:", invalid.length);