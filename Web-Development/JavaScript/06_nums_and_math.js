const score = 200
console.log(score)

const b = new Number(200) //different when printing
console.log(b) 

console.log(b.toString().length); //1
console.log(b.toFixed(2)); //decimal till 2 decimals   2
const o=23222.232322
console.log(o.toPrecision(3)) //first 3 numbers and rest will give as exxponent

const h = 1000000
console.log(h.toLocaleString('en-IN'));
//