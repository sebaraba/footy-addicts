import { Request, Response } from 'express';
import {
  body,
  param,
  validationResult,
} from 'express-validator';
import Owner from '../models/Owner';

export const getOwners = async (
  req: Request,
  res: Response
) => {
  try {
    const owners = await Owner.find();
    res.json(owners);
  } catch (err: unknown) {
    if (err instanceof Error) {
      res.status(500).json({ error: err.message });
    } else {
      res.status(500).json({ error: 'Unknown error' });
    }
  }
};

export const getOwner = [
  param('id').isMongoId().withMessage('Invalid ID format'),
  async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res
        .status(400)
        .json({ errors: errors.array() });
    }

    try {
      const owner = await Owner.findById(req.params.id);
      if (!owner)
        return res
          .status(404)
          .json({ error: 'Owner not found' });
      res.json(owner);
    } catch (err: unknown) {
      if (err instanceof Error) {
        res.status(500).json({ error: err.message });
      } else {
        res.status(500).json({ error: 'Unknown error' });
      }
    }
  },
];

export const createOwner = [
  body('name')
    .isString()
    .withMessage('Name must be a string'),
  body('email')
    .isEmail()
    .withMessage('Invalid email format'),
  body('phone')
    .isString()
    .withMessage('Phone must be a string'),
  async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res
        .status(400)
        .json({ errors: errors.array() });
    }

    try {
      const newOwner = new Owner(req.body);
      const savedOwner = await newOwner.save();
      res.status(201).json(savedOwner);
    } catch (err: unknown) {
      if (err instanceof Error) {
        res.status(500).json({ error: err.message });
      } else {
        res.status(500).json({ error: 'Unknown error' });
      }
    }
  },
];

export const updateOwner = [
  param('id').isMongoId().withMessage('Invalid ID format'),
  body('name')
    .optional()
    .isString()
    .withMessage('Name must be a string'),
  body('email')
    .optional()
    .isEmail()
    .withMessage('Invalid email format'),
  body('phone')
    .optional()
    .isString()
    .withMessage('Phone must be a string'),
  async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res
        .status(400)
        .json({ errors: errors.array() });
    }

    try {
      const updatedOwner = await Owner.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      if (!updatedOwner)
        return res
          .status(404)
          .json({ error: 'Owner not found' });
      res.json(updatedOwner);
    } catch (err: unknown) {
      if (err instanceof Error) {
        res.status(500).json({ error: err.message });
      } else {
        res.status(500).json({ error: 'Unknown error' });
      }
    }
  },
];

export const deleteOwner = [
  param('id').isMongoId().withMessage('Invalid ID format'),
  async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res
        .status(400)
        .json({ errors: errors.array() });
    }

    try {
      const deletedOwner = await Owner.findByIdAndDelete(
        req.params.id
      );
      if (!deletedOwner)
        return res
          .status(404)
          .json({ error: 'Owner not found' });
      res.json({ message: 'Owner deleted' });
    } catch (err: unknown) {
      if (err instanceof Error) {
        res.status(500).json({ error: err.message });
      } else {
        res.status(500).json({ error: 'Unknown error' });
      }
    }
  },
];
