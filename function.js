console.log("This is Tutorial for Functions in JS");

function greet(name, greetText){
    console.log(name + " is a good boy")
    console.log( greetText +" "+ name)
}

function sum(a,b,c) {
 let d = a + b + c ;
 return d;
//   This line will never execute;
//  console.log("Function is returned");
}


let name = "Naman";
let name1 = "Nayan";
let name2 = "Harsh";
let name3 = "Ajay";
let greetText1 = "Have a good day";


greet(name, greetText1);
greet(name1, greetText1);
greet(name2, greetText1);
greet(name3, greetText1);

let returnVal = sum(2,3,5);
console.log(returnVal);

// console.log(name + " is a good boy");
// console.log(name1 + " is a good boy");
// console.log(name2+ " is a good boy");
// console.log(name3 + " is a good boy");