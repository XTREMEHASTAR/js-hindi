const user = {
    username: "Veer",
    price: 333,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to the web !`); 
        console.log(this);
               
    }

}

//user.welcomeMessage()
//user.username = "veer"
//user.welcomeMessage()

//console.log(this);

//function chai(params) {
  //  let username = "Veer"
    //console.log(this.username);
//}

//chai()

//const chai = function () {
  //  let username = "veer"
    //console.log(this.username);
//}

const chai =  () =>  {
    let username = "veer"
    console.log(this);
}
//chai()