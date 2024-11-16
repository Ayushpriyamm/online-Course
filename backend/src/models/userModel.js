import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
        unique: true,   
        index:true
    },
    password: {
        type: String,
        require: true,
    },
    role: {
        type: String,
        enum: ['student', 'Teacher'],
        default: 'student',
    },
    avatar: {
        type: String,
        default: 'https://t3.ftcdn.net/jpg/09/02/28/70/240_F_902287001_UIIWw90E5nDANrfcO3RTF9qqJdR37G32.jpg' // Replace with a real URL for the default avatar
    },

    enrolledCourse: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Course",
        }
    ]
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

export default User;