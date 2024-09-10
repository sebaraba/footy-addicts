import { Request, Response } from 'express';
import {
  body,
  param,
  validationResult,
} from 'express-validator';
import Booking from '../models/Booking';

export const getBookings = async (
  req: Request,
  res: Response
) => {
  try {
    const bookings = await Booking.find();
    res.json(bookings);
  } catch (err: unknown) {
    if (err instanceof Error) {
      res.status(500).json({ error: err.message });
    } else {
      res.status(500).json({ error: 'Unknown error' });
    }
  }
};

export const getBooking = [
  param('id').isMongoId().withMessage('Invalid ID format'),
  async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res
        .status(400)
        .json({ errors: errors.array() });
    }

    try {
      const booking = await Booking.findById(req.params.id);
      if (!booking)
        return res
          .status(404)
          .json({ error: 'Booking not found' });
      res.json(booking);
    } catch (err: unknown) {
      if (err instanceof Error) {
        res.status(500).json({ error: err.message });
      } else {
        res.status(500).json({ error: 'Unknown error' });
      }
    }
  },
];

export const createBooking = [
  body('name')
    .isString()
    .withMessage('Name must be a string'),
  body('date')
    .isISO8601()
    .withMessage('Invalid date format'),
  async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res
        .status(400)
        .json({ errors: errors.array() });
    }

    try {
      const newBooking = new Booking(req.body);
      const savedBooking = await newBooking.save();
      res.status(201).json(savedBooking);
    } catch (err: unknown) {
      if (err instanceof Error) {
        res.status(500).json({ error: err.message });
      } else {
        res.status(500).json({ error: 'Unknown error' });
      }
    }
  },
];

export const updateBooking = [
  param('id').isMongoId().withMessage('Invalid ID format'),
  body('name')
    .optional()
    .isString()
    .withMessage('Name must be a string'),
  body('date')
    .optional()
    .isISO8601()
    .withMessage('Invalid date format'),
  async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res
        .status(400)
        .json({ errors: errors.array() });
    }

    try {
      const updatedBooking =
        await Booking.findByIdAndUpdate(
          req.params.id,
          req.body,
          { new: true }
        );
      if (!updatedBooking)
        return res
          .status(404)
          .json({ error: 'Booking not found' });
      res.json(updatedBooking);
    } catch (err: unknown) {
      if (err instanceof Error) {
        res.status(500).json({ error: err.message });
      } else {
        res.status(500).json({ error: 'Unknown error' });
      }
    }
  },
];

export const deleteBooking = [
  param('id').isMongoId().withMessage('Invalid ID format'),
  async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res
        .status(400)
        .json({ errors: errors.array() });
    }

    try {
      const deletedBooking =
        await Booking.findByIdAndDelete(req.params.id);
      if (!deletedBooking)
        return res
          .status(404)
          .json({ error: 'Booking not found' });
      res.json({ message: 'Booking deleted' });
    } catch (err: unknown) {
      if (err instanceof Error) {
        res.status(500).json({ error: err.message });
      } else {
        res.status(500).json({ error: 'Unknown error' });
      }
    }
  },
];
