const account_Id = 112225
let accountEmail = "veer@google.com"
var accountPassword = "12345"
accountCity = "Mumbai"
let accountState;

//account_Id = 3  //not allowed

accountEmail = "hc@.com"
accountPassword = "12332"
accountCity="pune"

console.log(account_Id);
/*
Prefer not to use var
because of issue in block scope snd functional scope
*/
console.table([account_Id,accountEmail,accountPassword,accountCity,accountState])