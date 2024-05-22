const fs = require("fs");
const path = require("path");

// Paths
let configs = fs.readFileSync(`${__dirname}/configs.json`);
configs = JSON.parse(configs);
const folderPath = configs.dirPath;
if (!folderPath.trim()) throw new Error(`Path Is Not Correct !!!`);
if (JSON.parse(configs.makeCopy)) fs.mkdirSync(`${folderPath}/originalFiles`);

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

const makeCopy = (file, copyPath) => {
  if (path.extname(file)) fs.copyFileSync(file, copyPath);
  else {
    return false;
  }
};

const digitNum = generateNumberBasedOnDigits(files.length);
if (digitNum <= 0) throw new Error(`The Folder Is Empty !!!`);

const filesInfos = files.map((el, index) => {
  if (JSON.parse(configs.makeCopy))
    makeCopy(`${folderPath}/${el}`, `${folderPath}/originalFiles/${el}`);

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
