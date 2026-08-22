//------------------scope----------------

//{} ->scope of the pgm
let a = 2 //global scope
if(true){
    let a = 1
    const b = 2
    //console.log(`a : ${a}`) //blocl scope
    //var c = 3 //scope problem
}
//console.log(a)
//console.log(b)
//console.log(c) 

//only var gets printed
let username = "mehek"

function one(){
    const username = "itesh"
    function two(){
        const website = "youtube"
        //console.log(username)
    }
    two()
}

one()

//-------------------------imp!----------------------//


 //different methods to make func

 function addone(num){
    return num + 1
 }
 addone(5)
 const addtwo = function(num){
    return num + 2
 }

 addtwo(5)