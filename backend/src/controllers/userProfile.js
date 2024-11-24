import User from "../models/userModel.js";

export const fetchUser = async(req,res) => {
    try {
        const { id } = req.user;
        
        const user = await User.findById( id );

        if (!user) {
            return res.status(404).json({
                success:false,
                message: "user not found ❌"
            }) 
        }

        return res.status(200).json({
            success: true,
            message: "user fetched successfully✅",
            user
        })

        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Internal server error ❌",
            error
        })
        
    }
}

export const updateUser = async (req, res) => {
    
}

export const deleteUser = async (req, res) => {
    
}