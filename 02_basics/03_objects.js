// singleton

// object.create 

// object literals

const mySym = Symbol("key1")

const jsUser = {
    name:"aditya",
    age: 18,
    [mySym]: "key1",   //after using using symbol then write like this in brackets

    location :"mumbai",
    email: "abc@gmial.com",
    isloggedIn : false,
    LastLoginDays : ["monday", "Saturday"]

  
    
}
console.log(jsUser.age);

console.log(jsUser[mySym]);

Object.freeze(jsUser); //after using freeze it cant change the value of objects aswe want

jsUser.email= "aditya@gmial.com";
console.log(jsUser)
;

jsUser.greeting = function(){
    console.log("hello javascript user");
    
}
jsUser.greeting2 = function(){
    console.log(`hello you are with me ${this.name}`);
    
}
console.log(jsUser.greeting);
console.log(jsUser.greeting2);



