import { Request, Response } from 'express';
import {
  body,
  param,
  validationResult,
} from 'express-validator';
import Customer from '../models/Customer';

export const getCustomers = async (
  req: Request,
  res: Response
) => {
  try {
    const customers = await Customer.find();
    res.json(customers);
  } catch (err: unknown) {
    if (err instanceof Error) {
      res.status(500).json({ error: err.message });
    } else {
      res.status(500).json({ error: 'Unknown error' });
    }
  }
};

export const getCustomer = [
  param('id').isMongoId().withMessage('Invalid ID format'),
  async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res
        .status(400)
        .json({ errors: errors.array() });
    }

    try {
      const customer = await Customer.findById(
        req.params.id
      );
      if (!customer)
        return res
          .status(404)
          .json({ error: 'Customer not found' });
      res.json(customer);
    } catch (err: unknown) {
      if (err instanceof Error) {
        res.status(500).json({ error: err.message });
      } else {
        res.status(500).json({ error: 'Unknown error' });
      }
    }
  },
];

export const createCustomer = [
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
      const newCustomer = new Customer(req.body);
      const savedCustomer = await newCustomer.save();
      res.status(201).json(savedCustomer);
    } catch (err: unknown) {
      if (err instanceof Error) {
        res.status(500).json({ error: err.message });
      } else {
        res.status(500).json({ error: 'Unknown error' });
      }
    }
  },
];

export const updateCustomer = [
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
      const updatedCustomer =
        await Customer.findByIdAndUpdate(
          req.params.id,
          req.body,
          { new: true }
        );
      if (!updatedCustomer)
        return res
          .status(404)
          .json({ error: 'Customer not found' });
      res.json(updatedCustomer);
    } catch (err: unknown) {
      if (err instanceof Error) {
        res.status(500).json({ error: err.message });
      } else {
        res.status(500).json({ error: 'Unknown error' });
      }
    }
  },
];

export const deleteCustomer = [
  param('id').isMongoId().withMessage('Invalid ID format'),
  async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res
        .status(400)
        .json({ errors: errors.array() });
    }

    try {
      const deletedCustomer =
        await Customer.findByIdAndDelete(req.params.id);
      if (!deletedCustomer)
        return res
          .status(404)
          .json({ error: 'Customer not found' });
      res.json({ message: 'Customer deleted' });
    } catch (err: unknown) {
      if (err instanceof Error) {
        res.status(500).json({ error: err.message });
      } else {
        res.status(500).json({ error: 'Unknown error' });
      }
    }
  },
];
