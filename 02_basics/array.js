// paranthesis ()
//brackets []
// braces {}

const myArr = [ 0, 5,4,3,5, 7];
console.log(myArr[3]);


// const myArr2 = new Array(1, 4,5 ,6, 4, 3, )
// console.log(myArr2[0]);

// // array method 

// myArr.push(6)   //add number in last position
// console.log(myArr);

// myArr.pop();   //delete last position number thought the array
// console.log(myArr);

// myArr.unshift(9) //add number in front side 
// console.log(myArr)

// myArr.shift() //delete number in front side 
// console.log(myArr)

console.log(myArr.includes(9));

console.log(myArr.includes(1));

console.log(myArr.indexOf);

const newArr = myArr.join() // it canges array into string 
// console.log(myArr)
console.log(newArr);

// slice , splice

console.log("A",myArr);

let myA1 = myArr.slice(1, 3);
console.log(myA1);
console.log("B", myArr);

const myA2 =  myArr.splice(1,3);
console.log("c", myArr);
console.log(myA2);           //splice portion get lost from the array and print arary without them




