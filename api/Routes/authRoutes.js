import express from 'express'
import { signUp } from '../Controller/authController.js'

const router = express.Router()

router.post('/sign-up', signUp)

export default router; 