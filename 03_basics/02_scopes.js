let a = 10
const b = 49
var c = 30

console.log(a);
console.log(b);
console.log(c);

{}  //scopes

const d= 400 //global scope
console.log(d)

if(true){
    let c= 500  //block scope
    console.log("INNER:", c)
}


if(true) {
    const username = "hello"
    if(username === "hello"){
        const website = "netflix";
        console.log(username +website);
        
    }
    // console.log(wesite);
    console.log(username);
    
}

// +++++++++++++++++interesting++++++++++++++++++

function addone(num){   // this is the function
    return num + 3;
}
addone(4);


const addTwo = function(num){   //this is the variable or expression

    return num + 4
}
addTwo(5);
