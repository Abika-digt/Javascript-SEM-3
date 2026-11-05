// Name: Abika
// Roll Number: BCS2025568
// Assignment: 14 - Task 3

let count = 0;

let intervalId = setInterval(() => {
    count++;

    console.log("Tick " + count);

    if (count === 3) {
        clearInterval(intervalId);
    }
}, 200);