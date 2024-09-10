import { Request, Response } from 'express';
import {
  body,
  param,
  validationResult,
} from 'express-validator';
import SportBase from '../models/SportBase';

export const getSportBases = async (
  req: Request,
  res: Response
) => {
  try {
    const sportBases = await SportBase.find();
    res.json(sportBases);
  } catch (err: unknown) {
    if (err instanceof Error) {
      res.status(500).json({ error: err.message });
    } else {
      res.status(500).json({ error: 'Unknown error' });
    }
  }
};

export const getSportBase = [
  param('id').isMongoId().withMessage('Invalid ID format'),
  async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res
        .status(400)
        .json({ errors: errors.array() });
    }

    try {
      const sportBase = await SportBase.findById(
        req.params.id
      );
      if (!sportBase)
        return res
          .status(404)
          .json({ error: 'SportBase not found' });
      res.json(sportBase);
    } catch (err: unknown) {
      if (err instanceof Error) {
        res.status(500).json({ error: err.message });
      } else {
        res.status(500).json({ error: 'Unknown error' });
      }
    }
  },
];

export const createSportBase = [
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
      const newSportBase = new SportBase(req.body);
      const savedSportBase = await newSportBase.save();
      res.status(201).json(savedSportBase);
    } catch (err: unknown) {
      if (err instanceof Error) {
        res.status(500).json({ error: err.message });
      } else {
        res.status(500).json({ error: 'Unknown error' });
      }
    }
  },
];

export const updateSportBase = [
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
      const updatedSportBase =
        await SportBase.findByIdAndUpdate(
          req.params.id,
          req.body,
          { new: true }
        );
      if (!updatedSportBase)
        return res
          .status(404)
          .json({ error: 'SportBase not found' });
      res.json(updatedSportBase);
    } catch (err: unknown) {
      if (err instanceof Error) {
        res.status(500).json({ error: err.message });
      } else {
        res.status(500).json({ error: 'Unknown error' });
      }
    }
  },
];

export const deleteSportBase = [
  param('id').isMongoId().withMessage('Invalid ID format'),
  async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res
        .status(400)
        .json({ errors: errors.array() });
    }

    try {
      const deletedSportBase =
        await SportBase.findByIdAndDelete(req.params.id);
      if (!deletedSportBase)
        return res
          .status(404)
          .json({ error: 'SportBase not found' });
      res.json({ message: 'SportBase deleted' });
    } catch (err: unknown) {
      if (err instanceof Error) {
        res.status(500).json({ error: err.message });
      } else {
        res.status(500).json({ error: 'Unknown error' });
      }
    }
  },
];
