let dataJSON = require('./test.json');

console.log(dataJSON);

let obj = JSON.stringify(dataJSON);
let JSObj = JSON.parse(obj);

console.log(JSObj);