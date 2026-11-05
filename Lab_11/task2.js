// Name: Abika
// Roll Number: BCS2025568
// Assignment: 11 - Task 2

function makeCounter() {
    let count = 0;

    return function() {
        count++;
        return count;
    };
}

let counter = makeCounter();

console.log(counter());
console.log(counter());