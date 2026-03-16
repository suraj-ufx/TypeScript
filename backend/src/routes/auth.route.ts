import { Router } from 'express'
import { AuthController } from '../controllers/auth.controller.js'

const router = Router();
const authcontroller = new AuthController()

router.post('/auth/register', authcontroller.register)

export default router