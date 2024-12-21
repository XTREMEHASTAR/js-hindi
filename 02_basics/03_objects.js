// single ton

// object kiterals
const JsUser = {
    name: "Veer",
    age: 19,
    location: "Mumbai",
    email: "veer@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]

}

//console.log(JsUser.email)
//console.log(JsUser["email"])

JsUser.email = "veer@chatgpt.com"
Object.freeze(JsUser)
JsUser.email = "veer@AIgpt.com"
console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}

JsUser.greetingtwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingtwo());