const nums = [2,4,5,4,6,7,8]

const newNum = nums.map((num) => {return num+10})

console.log(newNum);


const mynum = [1,2,3,4,5,6,7,8,9]

const newMynum = mynum
                    .map((num)=> num *10)
                    .map((num) => num + 2)
