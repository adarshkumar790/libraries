import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config();

const Connection = async () => {
    try{
    mongoose.connect("mongodb+srv://AdarshKumar:8864087799@cluster0.bpglqqv.mongodb.net/?retryWrites=true&w=majority")
    console.log("Connected")
    }
    catch(error) {
       console.log("Error", +error)
    }

}
Connection()
