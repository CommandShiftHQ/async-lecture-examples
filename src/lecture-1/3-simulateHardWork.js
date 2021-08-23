// http://latentflip.com/loupe/?code=ZnVuY3Rpb24gc2ltdWxhdGVIYXJkV29yayhtaWxsaVNlY29uZHMpewogICAgY29uc3Qgc3RhcnRUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7ICAgICAgICAgICAgICAgICAgICAvLyBnZXQgdGhlIGN1cnJlbnQgdGltZQogICAgd2hpbGUgKG5ldyBEYXRlKCkuZ2V0VGltZSgpIDwgc3RhcnRUaW1lICsgbWlsbGlTZWNvbmRzKTsgLy8gaG9nIGNwdSB1bnRpbCB0aW1lJ3MgdXAKfQoKc2ltdWxhdGVIYXJkV29yaygxMDAwKTsKCmNvbnNvbGUubG9nKCJIZWxsbyB3b3JsZCEiKQo%3D!!!

const simulateHardWork = (milliSeconds) => {
  // get the current time
  const startTime = new Date().getTime();
  // whilst time now is less than the time we started plus a number of milliseconds, keep the thread within this function
  while (new Date().getTime() < startTime + milliSeconds) {
    console.log(startTime + milliSeconds - new Date().getTime());
  }
};

simulateHardWork(2000);

// time is up, now JS can get on with the next bit of code
console.log("hello world");
