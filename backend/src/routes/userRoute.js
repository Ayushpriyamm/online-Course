import express from 'express';
import { verifyUser } from '../middlewares/validateUser.js';
import { fetchUser } from '../controllers/userProfile.js';

const router = express.Router();

router.get('/getuser',verifyUser,fetchUser)


export default router
