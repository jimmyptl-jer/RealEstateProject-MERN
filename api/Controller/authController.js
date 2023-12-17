import User from "../Models/userModel";
import bcrypt from 'bcrypt';

export const signUp = async (req, res, next) => {
  const { username, password, email } = req.body;

  const userExit = await User.findOne({ email })

  if (userExit) {
    res.status(400).json('User already exists')
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
    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    next(error)
  }
};
