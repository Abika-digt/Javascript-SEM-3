// Name: Abika
// Roll Number: BCS2025568
// Assignment: 13 - Task 2

let marks = [72, 85, 30, 90];

let hasBelow40 = marks.some(mark => mark < 40);
let allAbove35 = marks.every(mark => mark >= 35);

console.log("Any mark below 40:", hasBelow40);
console.log("All marks are 35 or more:", allAbove35);