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
    },
    {
        "Customer": "Mr. Golf",
        "ItemsOrder": ['Flash Drive', 'A4 paper', 'CD'],
        "Qty": [2, 3, 10],
        "Price": [130, 120, 10]
    }
]

for (i = 0; i < order.length; i++) {
    let sum = 0;
    for (let j = 0; j < order[i].ItemsOrder.length; j++) {
        sum += order[i]["Price"][j] * order[i]["Qty"][j];
    }
    console.log(order[i].Customer, sum)
}