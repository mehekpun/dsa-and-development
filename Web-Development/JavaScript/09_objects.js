/* //singleton - apne tarah ka ek hi object hai


//object.create - constructor method singleton

//object literals 

const mysym = Symbol("key1")
const jsuser = {
    name: "mehek", //key:value
    age : 19,
    location: "pune",
    [mysym]: "mykey1" //to use symbol we use []brackets.
} //object

console.log(jsuser["name"])
console.log(jsuser.name)
console.log(jsuser[mysym])
jsuser.age = 20
console.log(jsuser.age)

//Object.freeze(jsuser)//the values won't change

jsuser.greeting = function(){
    console.log("hello js user")
}
jsuser.greetingtwo = function(){
    console.log(`hello js user, ${this.name}`)
}
console.log(jsuser.greeting())
console.log(jsuser.greeting) //function return back - function execute nhi hua hai bs reference aaya hai
console.log(jsuser.greetingtwo()) */
 
const t = new Object() //singleton object
//const l = {}

//both r same, will give empty object

t.id = "123adc"
t.name = "mehek"
t.isloggedin = false
const regularUser = {
    
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "mehek",
            lastname: "pun"
        }
    }
}

//console.log(regularUser.fullname.userfullname.firstname);

//console.log(t)

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"c",4:"d"}

const obj3 = {obj1 , obj2}
console.log(obj3)

const obj4 = Object.assign({},obj1,obj2) //pehla wala is target and rest all r souces, so obj1, obj2 se {} mein jaa raha hai
console.log(obj4)
console.log(Object.keys(t)); //array
console.log(Object.values(t));
console.log(Object.entries(t));

console.log(t.hasOwnProperty('isloggedin'))


//destructuring

const course = {
    coursename: "kaksha",
    fees:2000,
    courseinstructor: "mehek"
}

const {courseinstructor} = course //use that type of brackets
console.log(courseinstructor)
    
//---------------------------------------//

//----------------------------API-------------------------//

//JSON- Javascript Object Notation(kinda like object)

/* {
    "name":"mehek",
    "age":"18",
    "isloggedin": "true"
 } */

//the key value pair r in all in string

//sometimes API' s r in array form as well
