"use strict";


function boilWater() {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * 1000) + 1000;

        setTimeout(() => {
            if (Math.random() < 0.2) {
                reject("Failed to boil water!");
            } else {
                console.log("Water boiled.");
                resolve();
            }
        }, delay);
    });
}

function brewCoffee() {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * 1000) + 1000;

        setTimeout(() => {
            if (Math.random() < 0.2) {
                reject("Coffee brewing failed!");
            } else {
                console.log("Coffee brewed.");
                resolve();
            }
        }, delay);
    });
}

function pourCoffee() {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * 1000) + 1000;

        setTimeout(() => {
            if (Math.random() < 0.2) {
                reject("Failed to pour coffee!");
            } else {
                console.log("Coffee poured into the cup.");
                resolve();
            }
        }, delay);
    });
}


boilWater()
    .then(() => brewCoffee())
    .then(() => pourCoffee())
    .then(() => console.log("Coffee ready for the team!"))
    .catch(error => console.log("Error:", error));