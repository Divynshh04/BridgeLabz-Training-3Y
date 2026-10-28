"use strict";

function getBugs() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const apiFailed = Math.random() < 0.3;

            if (apiFailed) {
                reject("Failed to fetch bugs from the API.");
            } else {
                resolve([
                    "UI glitch",
                    "API timeout",
                    "Login failure"
                ]);
            }
        }, 1000);
    });
}

getBugs()
    .then(bugs => {
        console.table(bugs.map(bug => ({ Bug: bug })));
    })
    .catch(error => {
        console.log("Error:", error);
    });