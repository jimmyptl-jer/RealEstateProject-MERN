import express from 'express'
import { signUp } from '../Controller/authController.js'

const router = express.Router()

router.post('/', signUp)

export default router; 