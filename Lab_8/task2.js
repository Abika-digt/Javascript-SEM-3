// Name: Abika
// Roll Number: BCS2025568
// Assignment: 8 - Task 2

class Locker {
    constructor(pin) {
        this.pin = pin;
    }

    checkPin(number) {
        return number === this.pin;
    }
}

let locker = new Locker(1234);

console.log(locker.checkPin(1111));
console.log(locker.checkPin(1234));