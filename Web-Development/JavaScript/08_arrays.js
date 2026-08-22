//  ----------------array------------------

const arr=[1,2,3]
const  arr2 = new Array(1,2,3,4,5)
console.log(arr) //[1,2,3]
//console.log(arr2)

//when we make an array in console, usmein it gives us array, length and prototype
arr.push(6) //adds 6 to the last
console.log(arr)

arr.pop() //removes last element

arr.unshift(9) // start mein element add krta hai
arr.shift() //removes first element

console.log(arr.includes(2)) //true
console.log(arr.indexOf(9))

//gives -1 because it does not exist

const newarr = arr2.join() //makes it ito string, binded
console.log(arr2)
console.log(newarr) //string

//slice nd splice

console.log(arr.slice(1,3))
console.log(arr.splice(1,3)) //original array ko manipulate krta hai

const m = arr.concat(arr2)
const n = [...arr,...arr2] //people prefer this instead of concat
// ... -> spread operator
console.log(m)
console.log(Array.isArray("mehek"))
console.log(Array.from("mehek"))
console.log(Array.from({name: "mehek"})) //empty array!! interesting
//console.log(Array.of(score1,score2,score3))