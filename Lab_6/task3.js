// Name: Abika
// Roll Number: BCS2025568
// Assignment: 6 - Task 3

let jsonText = '{name: Rohan}';

try {
    let student = JSON.parse(jsonText);
    console.log(student);
} catch (error) {
    console.log("Invalid JSON");
}