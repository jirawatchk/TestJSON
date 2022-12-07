let order = 
    {
    "name" : ["Mr.Lee","Mr.Yue","Panpong"],
    "Itemorder" : ["A4 Paper","Ruler","Flash Drive"],
    "Price" : [24,12.5,65,40],
    "Qty" : [5,2,3]
    }
    console.log(order.name[0],order.Itemorder[0],order.Price[0]*order.Qty[0])
    console.log("         ",order.Itemorder[1],order.Price[1]*order.Qty[1])
   let Result0 = (order.Price[0]*order.Qty[0])+(order.Price[1]*order.Qty[1])
    console.log("   Result  ",Result0)

    console.log(order.name[1],order.Itemorder[2],order.Price[2]*order.Qty[1])
    console.log("         ",order.Itemorder[0],order.Price[3]*order.Qty[2])
   let Result1 = (order.Price[2]*order.Qty[1])+(order.Price[3]*order.Qty[2])
    console.log("   Result  ",Result1) 

    console.log(order.name[2],order.Itemorder[0],order.Price[1]*order.Qty[2])
    console.log("         ",order.Itemorder[2],order.Price[1]*order.Qty[0])
   let Result2 = (order.Price[1]*order.Qty[2])+(order.Price[1]*order.Qty[0])
    console.log("   Result  ",Result2) 

    console.log("Sum = ",Result0+Result1+Result2)