//find the sum of all numbers below 1000 divisible by 3 or 5
//eg 3,5,6,9 under 10 sum=23

console.log("HEllo");
let sum=0;
let a=1;
while(a<1000)
{
    if(a%3==0 || a%5==0)
    {
    sum = sum + a;
    }
    a = a + 1;
}
console.log(sum);