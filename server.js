const express=require("express");
const fs =require("fs");
const app=express();
const nodemailer = require("nodemailer");
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }))

app.get("/", (req,res) => { 
    fs.readFile("./index.html" , (err,data)=>{
    return res.end(data) ; 
})
});
app.get("/contact", (req,res) => { 
    fs.readFile("./contact.html" , (err,data)=>{
    return res.end(data) ; 
})
});

app.get("/service", (req,res) => { 
    fs.readFile("./services.html" , (err,data)=>{
    return res.end(data) ; 
})
});


app.post("/contact",async(req,res)=>{
    const transporter = nodemailer.createTransport({
        service:"gmail",
        auth: {
          user: "tasnim.zidi1999@gmail.com",
          pass: "stgbfgfggfgf",
        },
      });
     
const{email,subject,message }=req.body
      const mailOptions = {
        from: 'tasnim.zidi1999@gmail.com',
        to: email,
        subject: subject,
        text: message,
    };



   try 
    {const sendMailer =await transporter.sendMail(mailOptions)
        fs.readFile('./sendMail.html',(err,data)=>{
        if(err) 
         console.log(err)
        
        else
         return res.end(data);
        }) ;
   } catch (error) {
    
   }
});
 














app.listen(2000,(err)=>{
    if(err){
        console.log(err);
    }
   
else {console.log('server is running on port 2000')}
;
});
