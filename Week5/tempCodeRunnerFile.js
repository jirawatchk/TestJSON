let order = [{
        "Customer": "Mr.Lee",
        "ItemsOrder": ['A4 paper', 'Ruler'],
        "Qty": [5, 2],
        "Price": [120, 25]
    },
    {
        "Customer": "Mr. Yue",
        "ItemsOrder": ['Flash Drive', 'A4 paper'],
        "Qty": [2, 3],
        "Price": [130, 120]
    }
]

console.log(order[0]);
for (i = 0; i < order.length; i++) {
    console.log(order[i].Customer, );
    for (let j = 0; j < 2; j++) {
        let sum = +order[i]["Price"][j] * order[i]["Qty"][j];
        //console.log(order[i]["ItemsOrder"][j]);
    }
    console.log(sum);
}