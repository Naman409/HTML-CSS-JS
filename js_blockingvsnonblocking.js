// Synchronus or Blocking
// -> Line by line execution

// Asynchronus or Non-Blocking
// -> Line by line execution not guaranteed
// -> Callbacks will fire 

const fs = require("fs");
fs.readFile("college.txt","utf-8",(err,data)=>{
    console.log(data);
});
console.log("Hey!!!This is Naman.")