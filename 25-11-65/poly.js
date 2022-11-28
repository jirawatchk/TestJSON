var dtat = [{
    "ID": 20001,
    "Name": "นางสาวจันทรรัตน์ ปรีดาศิริกุล",
    "Dept": "ฝ่ายบุคคล",
    "Position": "HR",
    "salary": 27000,
    "Level": "A",
}, {
    "ID": 20002,
    "Name": "นายภูมิพัฒน วัชรจิระกุล",
    "Dept": "IT",
    "Position": "System Engineer",
    "salary": 24000,
    "Level": "S",
}, {
    "ID": 20003,
    "Name": "นางอนันตญา แสนวงศ์",
    "Dept": "การเงิน",
    "Position": "Account",
    "salary": 38000,
    "Level": "B",
}, {
    "ID": 20004,
    "Name": "นางสาวกันสิตา มิ่งมาลา",
    "Dept": "ฝ่ายบุคคล",
    "Position": "HR",
    "salary": 23000,
    "Level": "A",
}, {
    "ID": 20005,
    "Name": "นายสุชาติ วัฒนศักดิ์มนตรี",
    "Dept": "ฝ่ายบุคคล",
    "Position": "HR",
    "salary": 76000,
    "Level": "C",
}, {
    "ID": 20006,
    "Name": "นายกรณ อุดมทรัพย์",
    "Dept": "การเงิน",
    "Position": "Account",
    "salary": 51000,
    "Level": "S",
}, {
    "ID": 20007,
    "Name": "นายจักริน ภูงาม",
    "Dept": "ฝ่ายบุคคล",
    "Position": "HR",
    "salary": 19000,
    "Level": "A",
}, {
    "ID": 20008,
    "Name": "นางอรัญญา เหล่าสกุล",
    "Dept": "การเงิน",
    "Position": "Account",
    "salary": 33000,
    "Level": "C",
}, {
    "ID": 20009,
    "Name": "นางสาวสราวลี ธาราวงศ์",
    "Dept": "IT",
    "Position": "System Account",
    "salary": 13000,
    "Level": "B",
}]
var sum01 = 0
var sum02 = 0
var sum03 = 0
var sum04 = 0
for (dtatsum = 0; dtatsum < dtat.length; dtatsum++) {
    if (dtat[dtatsum].Level == "S") {
        sum3 = dtat[dtatsum].salary * 1.6;
        sum03 += sum3;
    } else if (dtat[dtatsum].Level == "A") {
        sum3 = dtat[dtatsum].salary * 1.3;
        sum03 += sum3;
    } else if (dtat[dtatsum].Level == "B") {
        sum3 = dtat[dtatsum].salary * 1.0;
        sum03 += sum3;
    } else if (dtat[dtatsum].Level == "C") {
        sum3 = dtat[dtatsum].salary * 0.8;
        sum03 += sum3;
    }
    sum01 = dtat[dtatsum].salary * 12;
    sum7 = sum01 + sum03
    sum04 += sum7;
    if (sum01 < 300000) {} else if (sum01 >= 300000 && sum01 <= 600000) {
        sum2 = sum01 * 0.1;
        sum02 += sum2;
    } else if (sum01 >= 600000 && sum01 <= 1000000) {
        sum2 = sum01 * 0.25;
        sum02 += sum2;
    } else if (sum01 > 1000000) {
        sum2 = sum01 * 0.35;
        sum02 += sum2;
    }
    console.log(dtat[dtatsum].Name, "มีรายได้สุทธิต่อปี =", sum7, "บาท", "ต้องจ่ายภาษี", sum2, "บาท", "ได้โบนัส", sum3);
}
console.log("ผลประเมิน A")
for (i = 0; i < dtat.length; i++) {
    if (dtat[i].Level == "A") {
        console.log(dtat[i].Name, "ผลประเมิน", dtat[i].Level);
    }
}

console.log("บริษัทต้องจ่ายภาษีทั้งหมด :", sum02)
console.log("โบนัสที่ต้องให้พนักงานทั้งหมด :", sum03)
console.log("รายจ่ายต่อปีของบริษัท :", sum04)