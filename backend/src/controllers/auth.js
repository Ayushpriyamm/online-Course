import { generateToken } from "../middlewares/generateToken.js";
import User from "../models/userModel.js";
import bcrypt from 'bcrypt'

export const signup = async(req,res) => {
    try {
        const { name, email, password } = req.body;
        
        if (!name || !email || !password) {
            return res.status(400).send("all the feilds are required ")            
        }

        const user = await User.findOne({ email });

        if (user) {
            return res.status(400).json({message:"user already exist "})
        }

        const hashedPassword=await bcrypt.hash(password,10)
        const newUser = await User.create({
            name,
            email,
            password:hashedPassword,
        })

        const token = generateToken(newUser._id);

        return res.status(200).json({
            message:"Signup sucesssfull✅   ",
            token,
            newUser,
           
        })


    } catch (error) {
        console.error("something went wrong ❌" ,error)
        return res.status(500).json({
            message:"something went wrong ❌"
        })
    }
}

export const signin = async(req, res) => {
    try {
        const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({
            message: "Both the feilds are required"
        });
    }

    const user = await User.findOne({ email });
    if (!user) {
        return res.status(404).json({
            message: "user not exist"
        });
    }

    const isCompare = await bcrypt.compare(password, user.password);

    if (!isCompare) {
        return res.status(400).json({
            message: "Incorrect Password"
        })
    }
        
        const token = generateToken(user._id);
        
        return res.status(200).json({
            token,
            message: "signin successfull",
            user,
        })
    } catch (error) {
        console.error("something went wrong ❌" ,error)
        return res.status(500).json({
            message:"something went wrong ❌"
        })
    }
    
}