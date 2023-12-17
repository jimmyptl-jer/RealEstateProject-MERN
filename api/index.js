import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

import connectDB from '../config/db.js'
import userRoute from './Routes/userRoutes.js'

dotenv.config()

const app = express();

const PORT = process.env.PORT

app.use('/api/user', userRoute)

const startServer = async () => {
  await connectDB();
  app.listen(PORT, () => console.log(`Server is listening on the port ${PORT}`));
};

startServer();