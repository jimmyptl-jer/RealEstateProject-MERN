import express from express
import { testUser } from '../Controller/userController.js'

const router = express.Router()

router.get('/', testUser)

export default router; f