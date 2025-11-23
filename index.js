const prompt = require("prompt-sync")();


// Problem 1

// function ticketPrice(age){
//     let age = prompt("Enter your age: ");

// if(age<18){
//     console.log("You get a 20% dicount!");
// }
// else if(age>=18 && age<65){
//     console.log("Normal ticket price applies");
// }
// else{
//     console.log("You get a 30% senior discount!");
// }
// }

// ticketPrice();



// Problem 2
// function areaOfRrctangle(){
//     var length = prompt("Enter length: ");
//     var width = prompt("Enter width: ");

//     const Area =  length*width;
//     console.log("Area of Rectangle = ", Area);
// }

// areaOfRrctangle();



// // Problem 3

// let product = {
//     name : "Ac",
//     price : 50000,
//     inStock : true
// };

// console.log(product);


// Problem 4

let guestList = ['Vivek', 'Raj', 'Shalini', 'Aparna', 'Aashi'];

let name = prompt("Enter the name to check: ");

if (guestList.includes(name)) {
    console.log("Welcome to the party ", name);
}
else{
    console.log("Sorry, you're not on the guest list.");
}