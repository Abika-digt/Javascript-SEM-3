// Name: Abika
// Roll Number: BCS2025568
// Assignment: 4 - Task 3

function billWithTax(amount, taxRate = 0.18) {
    return amount + (amount * taxRate);
}

console.log(billWithTax(100));