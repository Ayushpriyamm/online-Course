import dotenv from 'dotenv'
import mongoose from "mongoose";

dotenv.config();

export const dbConfig = async() => {
    try {
       await mongoose.connect(process.env.MONGO, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("DB connected successfully ✅")
    } catch (error) {
        console.error   ("DB connection failed ❌",error);
        process.exit(1);
    }
}