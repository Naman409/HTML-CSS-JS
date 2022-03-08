// Bahut saare modules hai JavaScript me , Sabka basic yahi hai aur baaki jo bhi module search krna ho toh google kr lena 
const fs = require("fs");
let text = fs.readFileSync("college.txt","utf-8");
text = text.replace("College","IET DAVV");
console.log("The content of the file  is");
console.log(text);

console.log("Creating a new file");
fs.writeFileSync("naman.txt",text);