"use strict";

function design(callback) {
    setTimeout(() => {
        console.log("Design completed");
        callback();
    }, 1000);
}

function build(callback) {
    setTimeout(() => {
        console.log("Build completed");
        callback();
    }, 1000);
}

function test(callback) {
    setTimeout(() => {
        console.log("Testing completed");
        callback();
    }, 1000);
}

function deploy(callback) {
    setTimeout(() => {
        console.log("Deployment completed");
        callback();
    }, 1000);
}

function celebrate() {
    setTimeout(() => {
        console.log("Celebration time!");
    }, 1000);
}

function runWithCallbacks() {
    design(() => {
        build(() => {
            test(() => {
                deploy(() => {
                    celebrate();
                });
            });
        });
    });
}

function runStage(stageName) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(stageName + " completed");
            resolve();
        }, 1000);
    });
}

async function runWithAsyncAwait() {
    await runStage("Design");
    await runStage("Build");
    await runStage("Testing");
    await runStage("Deployment");
    await runStage("Celebration");
}

runWithCallbacks();
// runWithAsyncAwait();