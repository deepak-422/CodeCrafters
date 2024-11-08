import dotenv from 'dotenv'
import express from "express";
import twilio from "twilio"

dotenv.config();
const accountSid= process.env.accountSid;
const authToken= process.env.authToken;
const client = twilio(accountSid, authToken);
const Port= process.env.port;
const app= express();

app.listen(Port, ()=>{
console.log(`Server started at ${Port}`);
})


app.post("/sent", (req, res)=>{
    const sendsms=async(body)=>{
        let msg={
        
            from: '+12625100554',
            to: '+919926706981',
            body
        }
        try{
           const message = await client.messages.create(msg);
           console.log(message)
        }
        catch(e){
            console.log(e)
        }
        }
        sendsms("hi i am do");
    res.send("messages sent")
})
