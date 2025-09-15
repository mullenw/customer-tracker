let customers = [
    {
        name: "Amon-Ra St. Brown",
        email: "astbrown@gmail.com",
        purchases: ["football cleats", "gloves"]
    },
    {
        name: "James Cook",
        email: "jcook@gmail.com",
        purchases: ["helmet", "shoulder pads"]
    },
    {
        name: "De'von Achane",
        email: "dachane@gmail.com",
        purchases: ["blue gatorade", "gloves"]
    }
];
customers.push({
    name: "Xavier Worthy",
    email: "xworthy@gmail.com",
    purchases: ["football", "helmet visor"]
});
customers.shift();
customers[0].email = "james4cook@gmail.com";
customers[1].purchases.push("cleats");
//Summary of Products
customers.forEach(obj => console.log(`${obj.name}\t|\t${obj.email}\t|\t${obj.purchases.length}`));

//inventory.push({sku:"SKU-005",name:"Pads",price:174.99,stock:150})
//console.log(inventory.pop())
//inventory[1].price = 19.99
//console.log(inventory[1])