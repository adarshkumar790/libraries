import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config();

const Connection = async () => {
    try{
    mongoose.connect("mongodb+srv://kumaradarsh9379:<password>@cluster0.ipzi9pa.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    console.log("Connected")
    }
    catch(error) {
       console.log("Error", +error)
    }

}
Connection()
