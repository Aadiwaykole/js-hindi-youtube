const mynum = [4,3,5]

const total = mynum.reduce((acc, curre)=> acc+curre, 0)

console.log(total)


const shopingCart = [
    {
        itemName : "javascript",
        price : 3000
    },
    {
        itemName: "py",
        price : 5999
    },
    {
        itemName: "ml",
        price : 59
    },
    
    {
        itemName: "pds",
        price : 599
    },
    

]

const totalprice = shopingCart.reduce((acc, item)=> acc+item.price,0)

console.log(totalprice);


