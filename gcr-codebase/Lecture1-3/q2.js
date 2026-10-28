let userName = "Divyansh";
let age = 21;
let isStudent = true;
let subjects = ["Java", "JavaScript", "Python"];
let student = { name: "Divyansh", course: "B.Tech CSE" };
let address = null;
let phoneNumber;

let data = [
    { Label: "User Name", Value: userName, Type: typeof userName },
    { Label: "Age", Value: age, Type: typeof age },
    { Label: "Is Student", Value: isStudent, Type: typeof isStudent },
    { Label: "Subjects", Value: subjects.join(", "), Type: Array.isArray(subjects) ? "array" : typeof subjects },
    { Label: "Student Object", Value: JSON.stringify(student), Type: typeof student },
    { Label: "Address", Value: address, Type: String(address) },
    { Label: "Phone Number", Value: phoneNumber, Type: typeof phoneNumber }
];

console.table(data);