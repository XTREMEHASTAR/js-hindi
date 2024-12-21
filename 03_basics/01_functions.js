function sayMyName() {
    console.log("V");
    console.log("E");
    console.log("E");
    console.log("R");   
}

//sayMyName()

//function addTwoNumbers(number1, number2){
  //  console.log(number1 + number2);
//}

function addTwoNumbers(number1, number2){

    //let result = number1 + number2
    //return result

   // return number1 + number2
}
const result = addTwoNumbers(44, 55)
//console.log("Result: ", result);


function loginUserMessage(username){
    if(username === undefined){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

//console.log(loginUserMessage("Veer"));
//console.log(loginUserMessage());

function calculateCartPrice(...num1){
    return num1
}

//console.log(calculateCartPrice(200, 400, 5222))

const user = {
    username: "Veer",
    price: 1999
}

function handelObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    
}

handelObject(user)

const myNewArray = [100, 200, 300]

function returnSecondValue(getArray){
    return getArray[2]
}

console.log(returnSecondValue(myNewArray));

