// object notations
const myObject = 
{
    "name" : "Alice",
    "age" : 25,
    "isStudent" : true,
    "hobbies" : ["reading","coding"],
    "address" : {"city" : "New York", "Zip Code" : "10001"}
}

console.log(`Name : ${myObject.name}`);
console.log(`Address : ${myObject.address.city}`);



let num = [];
for(let i=0;i<=100;i++)
{ num.push(i)}
console.log(num.map(x => x*3).filter(x => x%5==0).reduce((a,x) => a+x))

//Arrays
let sum=0;
const users = 
[
    {name:'Alice', age:25},
    {name:'Bob', age:30},
    {name:'Charlie', age:25}
];

total = users.map(x => x.age).reduce((a,x)=>a+x)
console.log(`Avg: ${total/users.length}`)
