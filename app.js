const express=require('express');
require('dotenv').config()
const app=express()
const bodyParser=require('body-parser')
app.use(bodyParser.urlencoded({extended:true}))

const nodemailer=require('nodemailer')

app.get('/',(req,res)=>{
res.sendFile(__dirname+'/contactform.html')

})
app.post('/',(req,res)=>{
  let transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
     port: 465,
    secure: true,
      auth: {
        user: "saiashish7777@gmail.com",
        pass: "shirdisai"
      },
      tls:{
        rejectUnauthorised:false
      }
    });

let options={
  from: "saiashish7777@gmail.com",
  to: "saiashish7777@gmail.com",
  subject: "Hello ✔",
  text: "Hello world?",
  html: "<b>Hello world?</b>"
};
   transporter.sendMail(options,(err,info)=>{
     if(err){
     console.log(err);
     res.send(err)}
else{
  res.send(info)
  console.log(info);
}
   }

 );


})
app.listen(3000,()=>{
  console.log("server started!");
})