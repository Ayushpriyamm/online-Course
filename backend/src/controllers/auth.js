import { generateToken } from "../middlewares/generateToken.js";
import User from "../models/userModel.js";
import bcrypt from 'bcrypt'


export const signup = async(req,res) => {
    try {
        const { name, email, password } = req.body;
        
        if (!name || !email || !password) {
            return res.status(400).json({
                success:false,
                message: "all the feilds are required "
            })           
        }

        const existingUser = await User.findOne({ email:email.toLowerCase() });

        if (existingUser) {
            return res.status(409).json({
                success:false,
                message: "user already exist "
            })
        }

        const hashedPassword=await bcrypt.hash(password,10)
        const newUser = await User.create({
            name,
            email:email.toLowerCase(),
            password:hashedPassword,
        })

        const token = generateToken(newUser._id);

        //setting token in a cookie 
        res.cookie("authToken", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
            maxAge: 24 * 60 * 60 * 1000, 
        })

        return res.status(200).json({
            success:true,
            message:"Signup sucesssfull✅   ",
            token,
            user:newUser,
           
        })


    } catch (error) {
        console.error("something went wrong ❌" ,error)
        return res.status(500).json({
            success:false,
            message:"something went wrong ❌"
        })
    }
}

export const signin = async(req, res) => {
    try {
        const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({
            success:false,
            message: "Both the feilds are required"
        });
    }

    const user = await User.findOne({ email:email.toLowerCase() });
    if (!user) {
        return res.status(404).json({
            success:false,
            message: "This user not exist,check your email !!"
        });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
        return res.status(401).json({
            success:false,
            message: "Incorrect Password"
        })
    }
        
        const token = generateToken(user._id);        

        res.cookie("authToken", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
            maxAge: 24 * 60 * 60 * 1000, // 1 day
        });
        
        return res.status(200).json({
            success:true,
            token,
            message: "signin successfull",
            user:user,
        })
    } catch (error) {
        console.error("something went wrong ❌" ,error)
        return res.status(500).json({
            message:"something went wrong ❌"
        })
    }
    
}

export const signout = async (req, res) => {
    try {
        res.clearCookie('authToken', {
            httpOnly: true,
            secure: process.env.NODE_ENV == "production",
            sameSite: "strict",
             path: "/"
        });
        
        return res.status(200).json({
            success: true,
            message: "User has been logged out successfully",
        });
    } catch (error) {
        console.error("something went wrong ❌" ,error)
        return res.status(500).json({
            message:"something went wrong ❌"
        })
    }
}

export const google = async (req, res) => {
    try {
        const { name, email, avatar } = req.body;

        const existingUser =await User.findOne({ email: email.toLowerCase() });

        if (existingUser) {
            const token = generateToken(existingUser._id);

            res.cookie("authToken", token, {
                httpOnly: true,
                secure: process.env.NODE_ENV === "production",
                sameSite: "strict",
                maxAge: 24 * 60 * 60 * 1000, // 1 day
            });

            res.status(200).json({
                success:true,
                token,
                message: "signin successfull",
                user:existingUser,
            })
        } else {
            const generatePassword = Math.random().toString(36).slice(-8) + Math.random().toString(36).slice(-8);
            const hashedPassword = await bcrypt.hash(generatePassword, 10)
            
            const newUser =await User.create({
                name: name,
                email: email.toLowerCase(),
                password:hashedPassword,
                avatar:avatar
            })

            const token = generateToken(newUser._id);

        //setting token in a cookie 
            res.cookie("authToken", token, {
                secure: process.env.NODE_ENV === "production",
                httpOnly: true,
                sameSite: "strict",
                maxAge: 24 * 60 * 60 * 1000, 
            })

            res.status(201).json({
                success:true,
                token,
                message: "signup successfull",
                newUser,
            })
        }
    } catch (error) {
        console.error("something went wrong ❌" ,error)
        return res.status(500).json({
            success:false,
            message:"something went wrong ❌"
        })
    }
}