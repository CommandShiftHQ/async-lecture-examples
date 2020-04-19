const fs = require("fs");

const readFile = (fileName) =>
  new Promise((resolve, reject) =>
    fs.readFile(`data/${fileName}.json`, "utf-8", (err, fileData) => {
      if (err) reject(err);

      resolve(fileData);
    })
  );

let allFiles = [];

const readFiles = () =>
  readFile("first")
    .then((first) => allFiles.push(first))
    .then(() => readFile("second"))
    .then((second) => allFiles.push(second))
    .then(() => readFile("third"))
    .then((third) => allFiles.push(third))
    .then(() => readFile("fourth"))
    .then((fourth) => allFiles.push(fourth))
    .then(() => console.log(allFiles))
    .catch((e) => console.log(e));

readFiles();
