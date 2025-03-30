//imidiately unwoked function expression

(function chai(){
    console.log(`db connected`);
})();

((name)=>{
    console.log(`db connected two ${name}`);
})("aditya")

// a probles is created by global scope pollution so that for removing that type of pollution we are using iife
