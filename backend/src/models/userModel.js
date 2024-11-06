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
        default: ' https://img.freepik.com/free-photo/user-profile-icon-front-side-with-white-background_187299-40010.jpg?uid=R107565351&ga=GA1.1.844141304.1727195335&semt=ais_hybrid' // Replace with a real URL for the default avatar
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