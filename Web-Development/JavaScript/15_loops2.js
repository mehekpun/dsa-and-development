const coding = ["java","python","cpp","ruby"]

//coding.forEach( function (item){ 
    //console.log(item)}) 
//bs function ka naam hata do, apne aap saare values pe iterate hoga

// coding.forEach((item) => {
//     console.log(item)
// })

// function printme(item){
//     console.log(item + "a");
// }
// coding.forEach(printme)
// //printme func will be executed for each name

// coding.forEach((item,index,arr)=>{
//     console.log(item,index,arr);
// })
//common array is used here

// const students = [
//     {
//         rollno : 3131,
//         name : "mehek"
//     },
//     {
//         rollno : 3132,
//         name : "mukul"
//     },
//     {
//         rollno : 3123,
//         name : "itesh"
//     },
//     {
//         rollno : 3102,
//         name : "aditi"
//     }

// ]

// students.forEach((item) => {
//     console.log(`Roll no. : ${item.rollno} and name : ${item.name}`);
// })

const mynum = [1,2,3,4,5,6,7,8,9]

const newnum = mynum.filter( (num)=> num >4)
console.log(newnum)

const nnum = mynum.filter( (num) => {
    return num > 4
}  ) 
//when we use {} , then we must use return keyword