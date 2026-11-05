// Name: Abika
// Roll Number: BCS2025568
// Assignment: 12 - Task 2

function formatMarks(marks, callback) {
    return callback(marks);
}

console.log(formatMarks(76, (marks) => {
    return "Marks: " + marks + "/100";
}));