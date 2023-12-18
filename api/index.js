import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors'

import connectDB from '../config/db.js';
import userRoute from './Routes/userRoutes.js';
import authRoute from './Routes/authRoutes.js';

dotenv.config();

const app = express();

app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type']
}));


// Middleware: Parse incoming JSON requests
app.use(express.json());

// Middleware: Parse URL-encoded requests with extended options
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 3000; // Use a default port if PORT is not defined

app.use('/api/user', userRoute);
app.use('/api/auth', authRoute);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error'

  return res.status(statusCode).json({
    success: false,
    statusCode,
    message
  })
})

const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => console.log(`Server is listening on the port ${PORT}`));
  } catch (error) {
    console.error('Error starting the server:', error.message);
    process.exit(1); // Exit the Node.js process with a non-zero exit code to indicate an error
  }
};

startServer();
