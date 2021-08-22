function first() {
    throw new Error("Stack Trace Error");
}

function second() {
    return first();
}

function third() {
    second();
}

third();


// function first() {
//     console.log("first ran with no error")
// }

// function second() {
//     console.log("second ran with no error")
//     return first();
// }

// function third() {
//     second();
//     throw new Error("Stack Trace Error");
// }

// third();