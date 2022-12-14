const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.send("Hello World");
})
app.listen(4200,()=>{
   console.log('Start server at port 4200'); 
})