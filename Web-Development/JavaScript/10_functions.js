//WHY WE USE FUNCTIONS?
//To repeat a set of code without typing it again n again

function n() {
  console.log("mehek");
}
n();
n();

function addnum(m, n) { //parameter (in def)
  console.log(m + n);
  return m + n;
}
const result = addnum(3, null); //arguments
console.log("result:", result);

//WHAT HAPPENS WHEN YOU DO NOT PASS AN ARGUMENT?
function loginusermessage(username = "mukul") {
  if (username === undefined) {
    console.log("please enter a valid name");
    return;
  } else {
    return `${username} just logged in`;
  }
}

let n = loginusermessage("mehek");
console.log(n);

let m = loginusermessage(); //will give undefined
console.log(m);

////REST OPERATOR, SPREAD

function n(val1, cal2, ...n1) {
  return n1;
}

console.log(n(100, 200, 300, 400, 34, 89, 89)); //gives out an array

//first two will be assigned to varibles and rest of the numbers will go to n1 as an array

//OBJECTS AS ARGUMENT

const user = {
  username: "mehek",
  price: 4999,
};

function handleobject(anyobject) {
  console.log(
    `username is ${anyobject.username} and the price is ${anyobject.price}`,
  );
}

handleobject(user);

// //give out the name of the object and uske attributes you want to import in functions

handleobject({
  username: "mukul",
  price: 200000,
});
// //we can also write direct object in the argument as well

// //ARRAYS AS ARGUMENT

const myarr = [100, 200, 300, 400, 500, 700];

function returnfirstvalue(myarr) {
  return myarr[0];
}

let firstvalue = returnfirstvalue(myarr);
console.log(firstvalue);
