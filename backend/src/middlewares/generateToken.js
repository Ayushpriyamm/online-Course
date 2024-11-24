import jwt from 'jsonwebtoken'

export const generateToken = (userId) => {

    try {
        const payload = { id: userId };
        
        const token = jwt.sign(payload, process.env.JWT_SCERET, { expiresIn: '1d' });

        return token
    } catch (error) {
        console.error("Error generating token" ,error)
        throw new Error('Token generation failed');
    }
}