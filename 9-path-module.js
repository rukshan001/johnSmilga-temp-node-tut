const path = require("path");

console.log(path.sep); // 👉🏽 \ on Windows 👉🏽 / on POSIX 👉🏽 returns the character used by the operating system to separate pathname components

const filePath = path.join("/content", "subfolder", "test.txt"); // The path.join() method joins all given path segments together using the platform-specific separator as a delimiter, then normalizes the resulting path.
console.log(filePath); // \content\subfolder\test.txt

const base = path.basename(filePath);
console.log(base); // test.txt

const absolute = path.resolve(__dirname, "content", "subfolder", "test.txt");
console.log(absolute); // C:\Users\hp\Desktop\Git Repos\My FE and BE Repos inside\John smilga\Node Js\tutorial\content\subfolder\test.txt
