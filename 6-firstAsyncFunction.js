function completeTask(task, milliseconds) {
    setTimeout(function () {
        console.log(
            `My task "${task}" has been completed after ${milliseconds} milliseconds.`
        );
    }, milliseconds);
}

console.log("****** Start my tasks *******");
completeTask("Call mum", 8);
completeTask("#100daysofcode", 120);
completeTask("Watch Netflix", 50);
completeTask("Clean room", 30);
console.log("------ End my tasks ------");
