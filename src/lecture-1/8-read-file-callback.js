const fs = require("fs");

const readFiles = () =>
  fs.readFile("data/third.json", "utf8", (err, myFile) => {
  if (err) throw err;
  console.log(myFile);
});

readFiles();
