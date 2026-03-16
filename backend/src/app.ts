import express, { Application } from "express";
import cors from 'cors'
import authRouter from './routes/auth.route.js'
const app: Application = express()

app.use(express.json());                  // parse incoming JSON bodies
app.use(cors())

app.use('/api/v1',authRouter)

export default app