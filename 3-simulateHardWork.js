const simulateHardWork = (milliSeconds) => {
    // get the current time
    var startTime = new Date().getTime();
    // whilst time now is less than the time we started plus a number of milliseconds, keep the thread within this function                    
    while (new Date().getTime() < startTime + milliSeconds) {
        console.log(startTime + milliSeconds - new Date().getTime())
    };
}

simulateHardWork(2000);

// time is up, now JS can get on with the next bit of code
console.log('hello world');
