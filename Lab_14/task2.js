// Name: Abika
// Roll Number: BCS2025568
// Assignment: 14 - Task 2

let timerId = setTimeout(() => {
    console.log("Not shown");
}, 1000);

clearTimeout(timerId);

console.log("Cancelled");