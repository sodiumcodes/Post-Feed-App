import mongoose from 'mongoose';

const Connection = mongoose.connect(process.env.MONGODB_URI).then((req, res)=>{
    console.log("Connection established with Database"); 
})

export default Connection;