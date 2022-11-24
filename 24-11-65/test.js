var emp = [{
    "IDemp": 10001,
    "Name": "นางสาว ชนิสาไกรรอด",
    "Dept": "IT",
    "Position": "System Engineer",
    "salary": 42000,
    "Bonus": "S",
}, {
    "IDemp": 10002,
    "Name": "นายวศพล สิริอนันต์",
    "Dept": "IT",
    "Position": "System Engineer",
    "salary": 13000,
    "Bonus": "A",
}, {
    "IDemp": 10003,
    "Name": "นางจิราพร อินทรประเสริฐ",
    "Dept": "HR",
    "Position": "HR",
    "salary": 9000,
    "Bonus": "C",
}, {
    "IDemp": 10004,
    "Name": "นางสาวพิมพา กาญจนมาศ",
    "Dept": "HR",
    "Position": "HR",
    "salary": 21000,
    "Bonus": "B",
}, {
    "IDemp": 10005,
    "Name": "นายจิรโชติ วัฒนโกศล",
    "Dept": "HR",
    "Position": "HR",
    "salary": 22000,
    "Bonus": "A",
}, {
    "IDemp": 10006,
    "Name": "นายฑัชพล ขจรเกียรติสกุล",
    "Dept": "Account",
    "Position": "Account",
    "salary": 12000,
    "Bonus": "S",
}, {
    "IDemp": 10007,
    "Name": "นายธนวิทย์ สุวรรณโชติ",
    "Dept": "Account",
    "Position": "Account",
    "salary": 14000,
    "Bonus": "A",
}, {
    "IDemp": 10008,
    "Name": "นางพัชรียา สำราญทรัพย์",
    "Dept": "Account",
    "Position": "Account",
    "salary": 50000,
    "Bonus": "C",
}, {
    "IDemp": 10009,
    "Name": "นางสาวขวัญชนก ธาดาวรวงศ์",
    "Dept": "IT",
    "Position": "System Account",
    "salary": 16000,
    "Bonus": "A",
}]
var sum1 = 0
var sum4 = 0
var sum5 = 0
var sum6 = 0
for (empsum = 0; empsum < emp.length; empsum++) {
    if (emp[empsum].Bonus == "S") {
        sum3 = emp[empsum].salary * 1.4;
        sum5 += sum3;
    } else if (emp[empsum].Bonus == "A") {
        sum3 = emp[empsum].salary * 1.2;
        sum5 += sum3;
    } else if (emp[empsum].Bonus == "B") {
        sum3 = emp[empsum].salary * 1.0;
        sum5 += sum3;
    } else if (emp[empsum].Bonus == "C") {
        sum3 = emp[empsum].salary * 0.8;
        sum5 += sum3;
    }
    sum1 = emp[empsum].salary * 12;
    sum7 = sum1 + sum3
    sum6 += sum7;
    if (sum1 < 200000) {} else if (sum1 >= 200000 && sum1 <= 500000) {
        sum2 = sum1 * 0.07;
        sum4 += sum2;
    } else if (sum1 >= 500000 && sum1 <= 1000000) {
        sum2 = sum1 * 0.20;
        sum4 += sum2;
    } else if (sum1 > 1000000) {
        sum2 = sum1 * 0.30;
        sum4 += sum2;
    }
    console.log(emp[empsum].Name, "มีรายได้สุทธิต่อปี =", sum7, "บาท", "ต้องจ่ายภาษี", sum2, "บาท", "ได้โบนัส", sum3);
}
console.log("พนักงานแผนกไอที")
for (i = 0; i < emp.length; i++) {
    if (emp[i].Dept == "IT") {
        itsum = emp[i].salary * 12;
        console.log(emp[i].Name, "ตำแหน่ง", emp[i].Position, "เงินเดือน", emp[i].salary, "รายได้ต่อปี", itsum);
    }
}
console.log("ผลประเมินS")
for (i = 0; i < emp.length; i++) {
    if (emp[i].Bonus == "S") {
        console.log(emp[i].Name, "ผลประเมิน", emp[i].Bonus);
    }
}
console.log("บริษัทต้องจ่ายภาษีทั้งหมด :", sum4)
console.log("โบนัสที่ต้องให้พนักงานทั้งหมด :", sum5)
console.log("รายจ่ายต่อปีของบริษัท :", sum6)