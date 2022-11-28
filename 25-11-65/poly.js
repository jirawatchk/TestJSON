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
var sumsalary = 0
var sumtax = 0
var totalbonus = 0
var salaryforyear = 0
for (empsum = 0; empsum < emp.length; empsum++) {
    if (emp[empsum].Bonus == "S") {
        sumbonus = emp[empsum].salary * 1.4;
        totalbonus += sumbonus;
    } else if (emp[empsum].Bonus == "A") {
        sumbonus = emp[empsum].salary * 1.2;
        totalbonus += sumbonus;
    } else if (emp[empsum].Bonus == "B") {
        sumbonus = emp[empsum].salary * 1.0;
        totalbonus += sumbonus;
    } else if (emp[empsum].Bonus == "C") {
        sumbonus = emp[empsum].salary * 0.8;
        totalbonus += sumbonus;
    }
    sumsalary = emp[empsum].salary * 12;
    totalsalary = sumsalary + sumbonus
    salaryforyear += totalsalary;
    if (totalsalary < 200000) {
        tax = 0;
    } else if (totalsalary > 200000 && totalsalary < 500000) {
        tax = totalsalary * 0.07;
        sumtax += tax;
    } else if (totalsalary > 500000 && totalsalary < 1000000) {
        tax = totalsalary * 0.20;
        sumtax += tax;
    } else if (totalsalary > 1000000) {
        tax = totalsalary * 0.30;
        sumtax += tax;
    }
    console.log(emp[empsum].Name, "มีรายได้สุทธิต่อปี =", totalsalary, "บาท", "ต้องจ่ายภาษี", tax, "บาท", "ได้โบนัส", Math.ceil(sumbonus));
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
console.log("บริษัทต้องจ่ายภาษีทั้งหมด :", sumtax)
console.log("โบนัสที่ต้องให้พนักงานทั้งหมด :", totalbonus)
console.log("รายจ่ายต่อปีของบริษัท :", salaryforyear)