import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  avatar: {
    type: String,
    default: '../assets/profile.jpg'
  }
}, {
  timestamps: true // Saves createdAt and updatedAt as dates. CreatedAt will be saved with the date the User was created
})

const User = mongoose.model('User', userSchema)
export default User