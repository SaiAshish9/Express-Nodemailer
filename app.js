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
        user: "saiashish####@gmail.com",
        pass: "###############"
      },
      tls:{
        rejectUnauthorised:false
      }
    });

let options={
  from: "saiashish####@gmail.com",
  to: req.body.email,
  subject: "Hello ✔",
  text: "Hello world?",
  html: req.body.message
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
