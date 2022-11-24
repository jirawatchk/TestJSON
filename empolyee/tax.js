let employee = [{
    "employeeID": 10001,
    "name": "นางสาวชนิสา ไกรรอด",
    "department": "ไอที",
    "position": "System Engineer",
    "salary": 42000,
    "bonusRank": "S",
    "bonus": null,
    "annual": null,
    "tax": null,
}, {
    "employeeID": 10002,
    "name": "นายวศพล สิริอนันต์",
    "department": "ไอที",
    "position": "System Engineer",
    "salary": 13000,
    "bonusRank": "A",
    "bonus": null,
    "annual": null,
    "tax": null,
}, {
    "employeeID": 10003,
    "name": "นางจิราพร อินทรประเสริฐ",
    "department": "ฝ่ายบุคคล",
    "position": "HR",
    "salary": 9000,
    "bonusRank": "C",
    "bonus": null,
    "annual": null,
    "tax": null,
}, {
    "employeeID": 10004,
    "name": "นางสาวพิมพา กาญจนมาศ",
    "department": "ฝ่ายบุคคล",
    "position": "HR",
    "salary": 21000,
    "bonusRank": "B",
    "bonus": null,
    "annual": null,
    "tax": null,
}, {
    "employeeID": 10005,
    "name": "นายจิรโชติ วัฒนโกศล",
    "department": "ฝ่ายบุคคล",
    "position": "HR",
    "salary": 22000,
    "bonusRank": "A",
    "bonus": null,
    "annual": null,
    "tax": null,
}, {
    "employeeID": 10006,
    "name": "นายธัชพล ขจรเกียรติสกุล",
    "department": "การเงิน",
    "position": "Account",
    "salary": 12000,
    "bonusRank": "S",
    "bonus": null,
    "annual": null,
    "tax": null,
}, {
    "employeeID": 10007,
    "name": "นายธนวิทย์ สุวรรณโชติ",
    "department": "การเงิน",
    "position": "Account",
    "salary": 14000,
    "bonusRank": "A",
    "bonus": null,
    "annual": null,
    "tax": null,
}, {
    "employeeID": 10008,
    "name": "นางพัชรียา สำราญทรัพย์",
    "department": "การเงิน",
    "position": "Account",
    "salary": 50000,
    "bonusRank": "C",
    "bonus": null,
    "annual": null,
    "tax": null,
}, {
    "employeeID": 10009,
    "name": "นางสาวขวัญชนก ธาดาวรวงศ์",
    "department": "ไอที",
    "position": "System Engineer",
    "salary": 16000,
    "bonusRank": "A",
    "bonus": null,
    "annual": null,
    "tax": null,
}]

function CaculateBonus(salary, bonusRank) {
    let bonusRate = [{
            "rank": "S",
            "rate": 1.4
        }, {
            "rank": "A",
            "rate": 1.2
        }, {
            "rank": "B",
            "rate": 1.0,
        },
        {
            "rank": "C",
            "rate": 0.8,
        }
    ];
    let bonus;
    for (i = 0; i < bonusRate.length; i++)
        if (bonusRank == bonusRate[i].rank) bonus = salary * bonusRate[i].rate;
    return Math.round(bonus);
}

function CaculateTax(annual) {
    let tax = 0;
    if (annual < 200000 && annual > 0) taxRate = 0;
    else if (annual > 200000 && annual < 500000) taxRate = 0.07;
    else if (annual > 500000 && annual < 1000000) taxRate = 0.2;
    else if (annual > 1000000) taxRate = 0.3;
    return Math.round(annual * taxRate);
}

function RunAndDisplay() {
    let sumTax = 0,
        sumBonus = 0,
        sumExpenes = 0;
    console.log("+++ข้อมูลพนักงานทั้งหมด+++")
    for (let i = 0; i < employee.length; i++) {
        employee[i].bonus = CaculateBonus(employee[i].salary, employee[i].bonusRank);
        employee[i].annual = (employee[i].salary * 12) + employee[i].bonus;
        employee[i].tax = CaculateTax(employee[i].annual);

        sumTax += employee[i].tax;
        sumBonus += employee[i].bonus;
        sumExpenes += employee[i].annual;
        // Display
        console.log(employee[i].name +
            "\tแผนก" + employee[i].department +
            "\tเงินเดือน " + employee[i].salary +
            " บาท \tโบนัส " + employee[i].bonus +
            " บาท \tรายได้สุทธิต่อปี " + employee[i].annual +
            " บาท \tภาษีที่ต้องจ่าย " + employee[i].tax +
            " บาท");
    }
    console.log("\n++++++พนักงานแผนกไอที++++++");
    for (let i = 0; i < employee.length; i++) {
        if (employee[i].department == "ไอที") console.log(employee[i].name + " ภาษีที่ต้องจ่าย " + employee[i].tax + " บาท");
    }
    console.log("\n++++++พนักงานที่ได้รับการประเมินโบนัสระดับS++++++");
    for (let i = 0; i < employee.length; i++)
        if (employee[i].bonusRank == "S") console.log(employee[i].name);

    console.log("\n++++++++++++++++++++++++++++++++++++++++++++++++");
    console.log("ผลรวมภาษีที่พนักงานในบริษัทต้องจ่าย", sumTax, "บาท");
    console.log("โบนัสที่บริษัทจ่ายให้พนักงาน", sumBonus, "บาท");
    console.log("รวมรายจ่ายต่อปีของบริษัทที่ต้องจ่ายให้พนักงาน", sumExpenes, "บาท");
}
RunAndDisplay();