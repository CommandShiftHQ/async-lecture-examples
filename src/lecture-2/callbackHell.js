const fs = require("fs");

const readFiles = () =>
  fs.readFile("data/first.json", "utf8", (err, firstFile) => {
    if (err) throw err;
    fs.readFile("data/second.json", "utf8", (err, secondFile) => {
      if (err) throw err;
      fs.readFile("data/third.json", "utf8", (err, thirdFile) => {
        if (err) throw err;
        fs.readFile("data/fourth.json", "utf8", (err, fourthFile) => {
          console.log(firstFile, secondFile, thirdFile, fourthFile);
        });
      });
    });
  });

readFiles();

// const fs = require("fs");

// let first;
// let second;
// let third;

// const getFirstFile = (err, firstFile) => {
//   if (err) throw err;
//   first = firstFile;
//   fs.readFile("data/second.json", "utf8", getSecondFile);
// };
// const getSecondFile = (err, secondFile) => {
//   if (err) throw err;
//   second = secondFile;
//   fs.readFile("data/second.json", "utf8", getThirdFile);
// };
// const getThirdFile = (err, thirdFile) => {
//   if (err) throw err;
//   third = thirdFile;
//   fs.readFile("data/second.json", "utf8", getFourthFile);
// };
// const getFourthFile = (err, fourthFile) => {
//   if (err) throw err;
//   console.log(first, second, third, fourthFile);
// };

// const readFiles = () => fs.readFile("data/first.json", "utf8", getFirstFile);

// readFiles();
