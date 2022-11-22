var obj = {
    a: 1,
    myFunction: function() {
        console.log("Call myFuntion");
    }
}
obj.a = 100;
console.log(obj.a);
console.log(typeof(obj.myFunction));
obj.myFunction();