const fs = require("fs");

const readFiles = () =>
  fs.readFile("data/first.json", "utf8", (err, firstFile) => {
    if (err) throw err;
    fs.readFile("data/second.json", "utf8", (err, secondFile) => {
      if (err) throw err;
      fs.readFile("data/third.json", "utf8", (err, thirdFile) => {
        if (err) throw err;
        fs.readFile("data/fourth.json", "utf8", (err, fourthFile) => {
          if (err) throw err;

          console.log(firstFile, secondFile, thirdFile, fourthFile);
        });
      });
    });
  });

readFiles();
