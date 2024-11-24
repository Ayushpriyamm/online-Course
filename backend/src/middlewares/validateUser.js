import jwt from 'jsonwebtoken';
import User from '../models/userModel.js';

export const verifyUser = async(req,res,next) => {
    let token;

    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
       try {
           token = req.headers.authorization.split(' ')[1];

           const decode = jwt.verify(token, process.env.JWT_SCERET);
                    
           req.user = await User.findById(decode.id).select('-password');

           if (!req.user) {
              return res.status(404).json({message:"user not exist"}) 
           }

           next()
        } catch (error) {
            if (error.name === 'TokenExpiredError') {
                return res.status(401).json({ message: 'Token expired, please log in again' });
            }
            return res.status(401).json({ message: 'Not authorized, token invalid' });
 
        } 
    } else {
        res.status(401).json({ message: 'No token, authorization denied' });
    }
    
}