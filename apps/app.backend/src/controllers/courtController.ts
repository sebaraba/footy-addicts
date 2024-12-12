import { Request, Response } from 'express';
import {
  body,
  param,
  validationResult,
} from 'express-validator';
import Court from '../models/Court';
import User from '../models/User';
import { ObjectId } from 'mongoose';

export const getCourts = async (
  req: Request,
  res: Response
) => {
  try {
    let courts = await Court.find( { userId: req.params.userId });
    
    return res.json(courts ?? []);
  } catch (err: unknown) {
    if (err instanceof Error) {
      res.status(500).json({ error: err.message });
    } else {
      res.status(500).json({ error: 'Unknown error' });
    }
  }
};

export const createCourt = async (
  req: Request,
  res: Response
) => {
  try {
    const {
      address,
      description,
      name,
      price,
    } = req.body;

    const user = await User.findOne({ _id: req.params.userId });
    if (!user) {
      return res
        .status(404)
        .json({ error: 'User not found' });
    }
    const newCourt = new Court({
      address,
      description,
      name,
      price,
      userId: user._id,
    });
    await newCourt.save();
    
    user.courts.push(newCourt._id as ObjectId);
    user.save();

    res.json({ message: 'Court created successfully' })
  } catch (err: unknown) {
    if (err instanceof Error) {
      res.status(500).json({ error: err.message });
    } else {
      res.status(500).json({ error: 'Unknown error' });
    }
  }
};