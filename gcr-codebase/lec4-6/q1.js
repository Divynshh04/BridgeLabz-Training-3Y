let bonus = 5000;

function calculateSalary() {
    let salary = 40000;
    let isPermanent = true;

    if (isPermanent) {
        salary += bonus;
    }

    console.log("Total Salary: ₹" + salary);

    isPermanent = false;

    if (isPermanent) {
        salary += bonus;
    }

    console.log("Salary after changing status: ₹" + salary);
    console.log("Global Bonus: ₹" + bonus);
}

calculateSalary();