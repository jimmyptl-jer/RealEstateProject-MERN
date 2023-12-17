import express from 'express'
import mongoose from 'mongoose'

const app = express();

mongoose.connect("mongodb+srv://anshumi:anshumi@databse.u7ngdrl.mongodb.net/?retryWrites=true&w=majority")

app.listen(3000, () => {
  console.log('Server is running on port 3000');
})