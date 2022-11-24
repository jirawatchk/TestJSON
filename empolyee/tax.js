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
}, ]


let sumTax = 0,
    sumBonus = 0,
    sumExpenes = 0;

function caculateBonus(salary, bonusRank) {
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
    for (i = 0; i < bonusRate.length; i++) {
        if (bonusRank == bonusRate[i].rank) {
            bonus = salary * bonusRate[i].rate;
        }
    }
    return Math.round(bonus);
}

function caculateTax(annual) {
    let taxRate = 0;
    let tax = 0;
    if (annual < 200000) taxRate = 0;
    else if (annual > 200000 && annual < 500000) taxRate = 0.07;
    else if (annual > 500000 && annual < 1000000) taxRate = 0.2;
    else if (annual > 1000000) taxRate = 0.3;
    else console.log("Error");

    return tax = annual * taxRate;
}

for (i = 0; i < employee.length; i++) {
    employee[i].bonus = caculateBonus(employee[i].salary, employee[i].bonusRank)
}

console.log(employee[0].bonus);