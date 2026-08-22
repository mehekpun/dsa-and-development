const user = {
    username : "mehek",
    price : 999,

    welcomemessage: function(){
        console.log(` ${this.username} welcome to website`)
        console.log(this)
    }
}

//this is used to refer to current context inside an OBJECT

// user.welcomemessage()
// user.username = "mukul"
// user.welcomemessage()

//console.log(this) //{} here current context is empty but if we run it in browser, it gives output was the windows context 

// function t(){
//     let username = "mehek"
//     console.log(this.username) //undefined
// }
// t() //now this gives the full current context


const chai = () => {
    let username = "mehek"
    console.log(this.username)
}

//chai() //undefined


//-------------------arrow-----------------//

const addtwo = (n1, n2) => {
    console.log(n1 + n2)

}
addtwo(5,7)

const addtwo = (n1, n2) =>  (n1+ n2) //implicit return bcz ye ek hi line ka statement hai

addtwo(5,7)