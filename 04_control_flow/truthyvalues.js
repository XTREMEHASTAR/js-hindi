const userEmail = []

if (userEmail) {
    console.log("Got user Email");
} else {
    console.log("Dont have user email");
}

/*
//falsy values
false
0
-0
Bog int 0n
null
""
undefined
NaN

*/

/*
// truty values
"0"
'false'
" "
[]
{}
function(){}
*/

/*
Empty array
if (userEmail.length === 0) {
    console.log("Array is empty");
    
}
*/

/*
Empty obj
const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
    
}
*/

//Nullish coalescing Operator (??): null undefined
let val1;
//val1 = 5 ?? 10
//val1 = null ?? 10
//val1 = undefined ?? 15
//val1 = null ?? 10 ?? 20

console.log(val1);

// Terniary  operator

// condition ? true : false
const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");
 ;
