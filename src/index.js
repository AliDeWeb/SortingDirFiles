const fs = require("fs");
const path = require("path");

// Paths
const folderPath = fs.readFileSync(`./folderPath.txt`, { encoding: "utf-8" });
if (!folderPath.trim()) throw new Error(`Path Is Not Correct !!!`);

// Reading Folder Files
const files = fs.readdirSync(folderPath);

// Logic
//** Generate Number Based On Digits Func **\\
const generateNumberBasedOnDigits = (num) => {
  let digitCount;
  if (num === 0) return 0;
  else {
    digitCount = Math.ceil(Math.log10(num));
  }

  let result = Math.pow(10, digitCount);

  return result;
};

const digitNum = generateNumberBasedOnDigits(files.length);
if (digitNum <= 0) throw new Error(`The Folder Is Empty !!!`);

const filesInfos = files.map((el, index) => {
  let file = fs.statSync(`${folderPath}/${el}`);
  const date = new Date(file.birthtime);
  const format = path.extname(el);

  return {
    filePath: `${folderPath}/${el}`,
    fileDate: date.getTime(),
    fileFormat: format,
  };
});

const sortedFiles = filesInfos.sort((a, b) => a.fileDate - b.fileDate);

sortedFiles.forEach((el, index) => {
  let fileName = `${index + 1}`.padStart(String(digitNum).length, `0`);
  let file = fs.renameSync(
    el.filePath,
    `${folderPath}/${fileName}${el.fileFormat}`,
  );
});
