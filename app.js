//To display the Cow
const cowsay = require("cowsay");
console.log(cowsay.say({text : "I'm a Cow!!"}));

//Variables
const appName = "Demo";
const currentDate = 7;
console.log(appName + " " + currentDate);

//Display
const a = 5;
console.log("The Value is : " + a);
console.log(`The value is, ${a}`);

//Function
function greet(name)
{
    let message = `Hello, ${name}!`;
    return message;
}
const greeting = greet("Alice");
console.log(greeting);

//While
let counter = 0;
while(counter<3)
{
    console.log(`Loop iteration: ${counter}`);
    counter =  counter + 1;
}
console.log("While Loop Finished");

//Function
function area(length, width = 1)
{
    return length*width;
}


const rectarea = area(10,5);
console.log(`Area of Rectangle: ${rectarea}`);
const squaarea = area(8);
console.log(`Area of a Square: ${squaarea}`);

const getsum = function(a,b) { return a+b; };
const sum = getsum(15,20);