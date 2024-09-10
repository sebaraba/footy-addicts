import { Request, Response } from 'express';
import {
  body,
  param,
  validationResult,
} from 'express-validator';
import Court from '../models/Court';

export const getCourts = async (
  req: Request,
  res: Response
) => {
  try {
    const courts = await Court.find();
    res.json(courts);
  } catch (err: unknown) {
    if (err instanceof Error) {
      res.status(500).json({ error: err.message });
    } else {
      res.status(500).json({ error: 'Unknown error' });
    }
  }
};

export const getCourt = [
  param('id').isMongoId().withMessage('Invalid ID format'),
  async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res
        .status(400)
        .json({ errors: errors.array() });
    }

    try {
      const court = await Court.findById(req.params.id);
      if (!court)
        return res
          .status(404)
          .json({ error: 'Court not found' });
      res.json(court);
    } catch (err: unknown) {
      if (err instanceof Error) {
        res.status(500).json({ error: err.message });
      } else {
        res.status(500).json({ error: 'Unknown error' });
      }
    }
  },
];

export const createCourt = [
  body('name')
    .isString()
    .withMessage('Name must be a string'),
  body('location')
    .isString()
    .withMessage('Location must be a string'),
  async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res
        .status(400)
        .json({ errors: errors.array() });
    }

    try {
      const newCourt = new Court(req.body);
      const savedCourt = await newCourt.save();
      res.status(201).json(savedCourt);
    } catch (err: unknown) {
      if (err instanceof Error) {
        res.status(500).json({ error: err.message });
      } else {
        res.status(500).json({ error: 'Unknown error' });
      }
    }
  },
];

export const updateCourt = [
  param('id').isMongoId().withMessage('Invalid ID format'),
  body('name')
    .optional()
    .isString()
    .withMessage('Name must be a string'),
  body('location')
    .optional()
    .isString()
    .withMessage('Location must be a string'),
  async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res
        .status(400)
        .json({ errors: errors.array() });
    }

    try {
      const updatedCourt = await Court.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      if (!updatedCourt)
        return res
          .status(404)
          .json({ error: 'Court not found' });
      res.json(updatedCourt);
    } catch (err: unknown) {
      if (err instanceof Error) {
        res.status(500).json({ error: err.message });
      } else {
        res.status(500).json({ error: 'Unknown error' });
      }
    }
  },
];

export const deleteCourt = [
  param('id').isMongoId().withMessage('Invalid ID format'),
  async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res
        .status(400)
        .json({ errors: errors.array() });
    }

    try {
      const deletedCourt = await Court.findByIdAndDelete(
        req.params.id
      );
      if (!deletedCourt)
        return res
          .status(404)
          .json({ error: 'Court not found' });
      res.json({ message: 'Court deleted' });
    } catch (err: unknown) {
      if (err instanceof Error) {
        res.status(500).json({ error: err.message });
      } else {
        res.status(500).json({ error: 'Unknown error' });
      }
    }
  },
];
