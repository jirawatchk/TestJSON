let employee = [{
    "employeeID": 10001,
    "name": "นางสาวชนิสา ไกรรอด",
    "department": "ไอที",
    "position": "System Engineer",
    "sarary": 42000,
    "year": null,
    "tax": null,

}, {
    "employeeID": 10001,
    "name": "นางสาวชนิสา ไกรรอด",
    "department": "ไอที",
    "position": "System Engineer",
    "sarary": 42000,
    "year": null,
    "tax": null,
}, {
    "employeeID": 10001,
    "name": "นางสาวชนิสา ไกรรอด",
    "department": "บุคคล",
    "position": "System Engineer",
    "sarary": 42000,
    "year": null,
    "tax": null,
}]

for (i = 0; i < employee.length; i++) {
    if (employee[i].department == "ไอที") {
        console.log(employee[i].name)
    }
}