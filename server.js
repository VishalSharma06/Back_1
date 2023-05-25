//Step-1 Create a Folder
// Step 2 npm init -y
// Step 3 npm i express
//Step 4 create server.js

const express=require('express');
const app=express();
const mongoose=require('mongoose');
const bodyParser=require('body-parser');
app.use(bodyParser.json());

app.listen(3000,()=>{
    console.log("Server Started to Listen on Port 3000");
});

app.get('/',(req,res)=>{
    res.send("Hello Jee Kaise ho sare");
});

app.post('/api/cars',(req,res)=>{
    const{name,brand}=req.body;
    console.log(name);
    console.log(brand);
    res.send("Request Send Sucessfully");
})


mongoose.connect('mongodb://127.0.0.1:27017/myDatabase',
  {
    useNewUrlParser: true,
    
    useUnifiedTopology: true
  }
)
.then(()=>{console.log("Connrection is Sucessful")})
.catch((error)=>{console.log("Recieved an Error")});