let scores = [];

for (let i = 0; i < 8; i++) {
    scores.push(Math.floor(Math.random() * 71) + 30);
}

let highest = Math.max(...scores);
let lowest = Math.min(...scores);
let total = scores.reduce((sum, score) => sum + score, 0);
let average = total / scores.length;
let passedStudents = scores.filter(score => score >= 50);

console.log("Scores:", scores);
console.log("Highest Score:", highest);
console.log("Lowest Score:", lowest);
console.log("Average Score:", average.toFixed(2));
console.log("Students Passed:", passedStudents.length);
console.log("Passed Scores:", passedStudents);