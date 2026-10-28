let currentSalary = 30000;
let annualIncrementRate = 10;
let salaryProjection = [];

for (let year = 1; year <= 5; year++) {
    currentSalary += currentSalary * annualIncrementRate / 100;

    salaryProjection.push({
        Year: year,
        Salary: Math.round(currentSalary)
    });
}

console.table(salaryProjection);