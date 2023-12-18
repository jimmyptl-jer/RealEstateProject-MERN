import User from "../Models/userModel.js";
import bcrypt from 'bcrypt';

export const signUp = async (req, res, next) => {
  const { username, password, email } = req.body;

  const userExists = await User.findOne({ email });

  if (userExists) {
    return res.status(400).json({ message: 'User already exists' });
  }

  try {
    const hashPassword = bcrypt.hashSync(password, 10);

    const newUser = new User({
      username,
      password: hashPassword,
      email
    });

    await newUser.save();

    // Return a JSON response for success
    return res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    next(error);
  }
};
