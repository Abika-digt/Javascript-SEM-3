// Name: Abika
// Roll Number: BCS2025568
// Assignment: 13 - Task 1

let prices = [120, 45, 300];

let total = prices.reduce((sum, price) => {
    return sum + price;
}, 0);

console.log("Total:", total);