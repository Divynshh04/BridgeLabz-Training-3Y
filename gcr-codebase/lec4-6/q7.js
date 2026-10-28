let feedback = "Great product! Fast delivery and amazing sound quality!";

let words = feedback.split(/\s+/);
console.log("Word Count:", words.length);

let lowerFeedback = feedback.toLowerCase();

if (!lowerFeedback.includes("bad") && !lowerFeedback.includes("poor")) {
    console.log("Positive Feedback");
} else {
    console.log("Needs Improvement");
}