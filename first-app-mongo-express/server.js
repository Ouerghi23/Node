const express=require('express');
const app=express();
const mongoose=require('mongoose');
require('dotenv').config();


mongoose.connect(process.env.MONGO_URI).then(()=> {console.log('connected to serve database ')}).catch(err=>{
    console.log
('Error connecting to server database')
})


const PORT=process.env.PORT
app.listen(PORT, ()=>{
    console.log('listening on port '+PORT);
})