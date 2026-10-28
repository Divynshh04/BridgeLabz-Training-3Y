let expenses = {
    food: 5000,
    travel: 2000,
    rent: 8000,
    bills: 1500,
    leisure: 1000
};

let total = 0;

for (let category in expenses) {
    total += expenses[category];
}

let average = total / 5;
let tax = total * 0.10;
total += tax;

console.log("Total Expenses: ₹" + (total - tax).toFixed(2));
console.log("Average Expenses: ₹" + average.toFixed(2));
console.log("Tax (10%): ₹" + tax.toFixed(2));
console.log("Final Amount After Tax: ₹" + total.toFixed(2));