let a = 300

if (true) {
    let a = 10
    const b = 20
    //var c = 30
    //console.log("INNER: ", a);
    
}

//console.log(a);
//console.log(b);
//console.log(c);

function one(){
    const username = "Veer"

    function two() {
        const website = "Youtube"
        console.log(username);
    }
    //console.log(website);
    
    //two()

}

//one()

if (true) {
    const username = "veer"
    if (username === "veer") {
        const website = " youtube"
        //console.log(username + website);        
    }
    //console.log(website);
    
}

//console.log(username);


// +++++++++++++++++++++intresting ++++++++++++

function addone(num){
    return num + 1
}

addone(9)

const addTwo = function (num) {
    return num + 2
}

addTwo(5)