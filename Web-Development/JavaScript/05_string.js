//stack(primitive), heap(non-primitive)
   //stack - copy

//----------------------string--------------------//

const name = "mehek"
const m = 0

console.log(name + m + "1")
console.log(`my name is ${name}`); //backstring hai

     
//another way to declare string

const gamename = "mehek-is-small"
console.log(gamename) //output is diff

//few characteristics
console.log(gamename.__proto__) //1
console.log(gamename.length) //2
console.log(gamename.toUpperCase()) //3
console.log(gamename.charAt(2)) //4

const s = gamename.substring(0,2)
const b = gamename.substring(-8,3)//ignored -ve value 
const t = gamename.slice(-8,2)
console.log(s) //5
console.log(m) //5
console.log(t) //5

const newStringOne = "      mehek    "
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar')) //will ask if this string is included in url
 
console.log(gamename.split('-')); //converts to array

//
