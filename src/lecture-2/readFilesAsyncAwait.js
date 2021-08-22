const fs = require("fs");

const readFile = (fileName) =>
  new Promise((resolve, reject) =>
    fs.readFile(`data/${fileName}.json`, "utf-8", (err, fileData) => {
      if (err) reject(err);

      resolve(fileData);
    })
  );

const readFiles = async () => {
  const firstFile = await readFile("first");
  const secondFile = await readFile("second");
  const thirdFile = await readFile("third");
  const fourthFile = await readFile("fourth");

  console.log(firstFile, secondFile, thirdFile, fourthFile);
};

readFiles();
