import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User';

const secret = process.env.JWT_SECRET || 'your_jwt_secret';

export const register = async (
  req: Request,
  res: Response
) => {
  const {
    email,
    password,
    firstName,
    lastName,
    phone,
    address,
    city,
    country,
    isAdmin,
  } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      email,
      password: hashedPassword,
      firstName,
      lastName,
      phone,
      address,
      city,
      country,
      isAdmin,
    });
    await newUser.save();
    res
      .status(201)
      .json({ message: 'User registered successfully' });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const login = async (
  req: Request,
  res: Response
) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user)
      return res
        .status(404)
        .json({ error: 'User not found' });

    const isMatch = await bcrypt.compare(
      password,
      user.password
    );
    if (!isMatch)
      return res
        .status(400)
        .json({ error: 'Invalid credentials' });

    const token = jwt.sign({ id: user._id }, secret, {
      expiresIn: '1h',
    });
    res.json({ token });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};
