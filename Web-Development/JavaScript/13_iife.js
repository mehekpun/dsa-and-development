//Immediaely Invoked Function Expressions

//global scope ke pollution ko hatane ke liye

//named iife
(function chai(){
    console.log("padh le laadle")
})(); //; is COmpulsory, content end krne ke liye

//simple iife
((name) => {
    console.log(`${name} ki attendance ki ho gyi`)
}
) ('mehek')

