const marvel_hero = ["thor ", "Ironman ","spiderman "];

const dc_hero = ["batman ","superman ", "aquaman "];

// const merge = marvel_hero.concat(dc_hero);  //merge values in one array
// console.log(merge);

const add_different =  [...marvel_hero, ...dc_hero];
console.log(add_different);


const nextArray = [3, 4, 3,  2, [5,6,7,7],6,67,6,[4,7,8,5]];

const real_nextArray = nextArray.flat(Infinity);
console.log(real_nextArray);


console.log(Array.isArray("helloworld")) //is is used for checking array
console.log(Array.from("helloworld"))    //it can make string into arry