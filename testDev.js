function getMaxProfit(data) {
    var indexMin = 0;
    var indexMax;
    var min = data[indexMin];
    var max = 0;

    data.forEach((element, index, array) => {
        if (element < min && index < array.length - 1) {
            min = element;
            indexMin = index;
        }
        if (element > max && index != 0 && index > indexMin) {
            max = element;
            indexMax = index;
        }
    });
    console.log("ซื้อหุ้นในวันที่", indexMin + 1, "ในราคา", min, "บาท");
    console.log("ขายหุ้นในวันที่", indexMax + 1, "ในราคา", max, "บาท");
    console.log("ส่วนต่าง", max - min, "บาท");
}

getMaxProfit([24, 8, 10, 5, 20, 15, 23, 8, 12, 2]);

