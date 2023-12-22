import express from 'express'
import { signUp, signIn, googleAuth } from '../Controller/authController.js'

const router = express.Router()

router.post('/sign-up', signUp)
router.post('/sign-in', signIn)
router.post('/google', googleAuth)
export default router; 