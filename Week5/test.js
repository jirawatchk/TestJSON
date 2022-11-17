const obj1 = {
    "Customer": ["Mr.Lee", "Mr.Yue", "Panpong"],
    "ItemOrder": ["A4 Adapter", "Ruler", " Flash Drive", "A4 Paper"],
    "Qty": [5, 2, 2, 4],
    "Price": [120, 25, 130, 120]
}
let MrLee = {
    "Name": obj1.Customer[0],
    "ItemOrder": (obj1.ItemOrder[0] + obj1.ItemOrder[1]),
    "Qty": [obj1.Qty[0], obj1.Qty[1]],
    "Price": [obj1.Price[0], obj1.Price[1]]
}
let MrYue = {
    "Name": obj1.Customer[1],
    "ItemOrder": (obj1.ItemOrder[2] + obj1.ItemOrder[3]),
    "Qty": [obj1.Qty[2], obj1.Qty[3]],
    "Price": [obj1.Price[2], obj1.Price[3]]
}
let Panpong = {
    "Name": obj1.Customer[2],
    "ItemOrder": (obj1.ItemOrder[1] + obj1.ItemOrder[3]),
    "Qty": [obj1.Qty[3], obj1.Qty[1]],
    "Price": [obj1.Price[3], obj1.Price[1]]
}
console.log(MrLee, "Result Item = ", obj1.Price[0] + obj1.Price[1])
console.log(MrYue, "Result Item = ", obj1.Price[2] + obj1.Price[3])
console.log(Panpong, "Result Item = ", obj1.Price[2] + obj1.Price[3])