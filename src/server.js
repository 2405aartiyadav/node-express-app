const express=require('express')
const app=express();

app.get('/',(re,res)=>{
 res.send('hello monuuuu.....');
});

app.get('/home',(req,res)=>{
    console.log(__dirname);
    res.sendFile(__dirname+'/home.html')
})




app.listen(3030,()=>{
    console.log("running on port 3030");
})
