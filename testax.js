let item = [
    {
        "name": "A4paper",
        "price": 120
    },
    {
        "name": "Ruler",
        "price": 25
    },
    {
        "name": "Flash Drive",
        "price": 130
    }
]

var Order = [{
    "customer": "Mr.Lee",
    "itemOrder": [item[0].name, item[1].name],
    "Qty": [5, 2],
    "price": [item[0].price, item[1].price]
},
{
    "customer": "Mr.Yue",
    "itemOrder": [item[2].name, item[0].name],
    "Qty": [2, 3],
    "price": [item[2].price, item[0].price]
},
{
    "customer": "Mr.SAM",
    "itemOrder": [item[0].name, item[1].name, item[2].name],
    "Qty": [2, 3, 4],
    "price": [item[0].price, item[1].price, item[2].price]
}
];

console.log(Order[0].customer,
    Order[0].price[0] * Order[0].Qty[0] +
    Order[0].price[1] * Order[0].Qty[1])

console.log(Order[1].customer,
    Order[1].price[0] * Order[1].Qty[0] +
    Order[1].price[1] * Order[1].Qty[1])

console.log(Order[2].customer,
    Order[2].price[0] * Order[2].Qty[0] +
    Order[2].price[1] * Order[2].Qty[1] +
    Order[2].price[2] * Order[2].Qty[2])