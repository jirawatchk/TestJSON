var obj = {
    a: 1,
    myFunction: function() {
        console.log("call myFuntion");
    }
}
obj.a = 100;
console.log(obj.a);
console.log(typeof(obj));
obj.myFunction();