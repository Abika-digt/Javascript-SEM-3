// Name: Abika
// Roll Number: BCS2025568
// Assignment: 9 - Task 2

function validateForm(name) {
    let errors = [];

    if (name.trim() === "") {
        errors.push("Name is required");
    }

    return errors;
}

console.log(validateForm("Asha"));
console.log(validateForm(""));