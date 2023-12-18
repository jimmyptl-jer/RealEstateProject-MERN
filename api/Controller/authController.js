import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import { errorHandler } from '../utils/error.js';
import User from "../Models/userModel.js";

export const signUp = async (req, res, next) => {
  const { username, password, email } = req.body;

  const userExists = await User.findOne({ email });

  if (userExists) {
    return next(errorHandler(400, 'User already exists with the given email'));
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
    console.error(error);
    next(error);
  }
};

export const signIn = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const validUser = await User.findOne({ email });

    if (!validUser) {
      return next(errorHandler(404, 'User not found'));
    }

    const validPassword = bcrypt.compareSync(password, validUser.password);

    if (!validPassword) {
      return next(errorHandler(401, 'Wrong credentials!'));
    }

    const { password: pass, ...rest } = validUser._doc

    const token = jwt.sign({ username: validUser.username, email: validUser.email }, process.env.JWT_SECRET);
    res
      .cookie('access_token', token, { httpOnly: true, expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000) })
      .status(200)
      .json(rest);

  } catch (error) {
    console.error(error);
    next(error);
  }
};
