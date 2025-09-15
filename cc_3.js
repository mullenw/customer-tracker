let customers = [
    {
        name: "Amon-Ra St. Brown",
        email: "astbrown@gmail.com",
        purchases: ["football cleats", "gloves"]
    },
    {
        name: "James Cook",
        email: "jcook@gmail.com"
        purchases: ["helmet", "shoulder pads"]
    },
    {
        name: "De'von Achane"
        email: "dachane@gmail.com"
        purchases: ["blue gatorade", "gloves"]
    }
];
customers.push({
    name: "Xavier Worthy",
    email: "xworthy@gmail.com",
    purchases: ["football", "helmet visor"]
});
customers.shift();


//Summary of Products
//SKU-001 | Eco Bottle | $19.99 | Stock: 42
inventory.forEach(obj => console.log(`${obj.sku}\t|\t${obj.name}\t|\t${obj.price}\t|\t${obj.stock}`));

inventory.push({sku:"SKU-005",name:"Pads",price:174.99,stock:150})
console.log(inventory.pop())
inventory[1].price = 19.99
console.log(inventory[1])