// primitive

//7
//string,number,boolean,null,undefined,symbol,bigint,

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

//console.log(id === anotherId);

const bigNumber = 39451235168748994899844644488684n


// refrence/non primitive

// array,objects,functions

const heros = ["shaktiman","naagraj","doga"];
let myObj ={
    name :"veer",
    age: 19,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof scoreValue);