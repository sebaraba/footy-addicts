import { Request, Response } from 'express';
import Owner from '../models/Owner';

export const getOwners = async (req: Request, res: Response) => {
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

export const getOwner = async (req: Request, res: Response) => {
  try {
    const owner = await Owner.findById(req.params.id);
    if (!owner) return res.status(404).json({ error: 'Owner not found' });
    res.json(owner);
  } catch (err: unknown) {
    if (err instanceof Error) {
      res.status(500).json({ error: err.message });
    } else {
      res.status(500).json({ error: 'Unknown error' });
    }
  }
};

export const createOwner = async (req: Request, res: Response) => {
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
};

export const updateOwner = async (req: Request, res: Response) => {
  try {
    const updatedOwner = await Owner.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedOwner)
      return res.status(404).json({ error: 'Owner not found' });
    res.json(updatedOwner);
  } catch (err: unknown) {
    if (err instanceof Error) {
      res.status(500).json({ error: err.message });
    } else {
      res.status(500).json({ error: 'Unknown error' });
    }
  }
};

export const deleteOwner = async (req: Request, res: Response) => {
  try {
    const deletedOwner = await Owner.findByIdAndDelete(req.params.id);
    if (!deletedOwner)
      return res.status(404).json({ error: 'Owner not found' });
    res.json({ message: 'Owner deleted' });
  } catch (err: unknown) {
    if (err instanceof Error) {
      res.status(500).json({ error: err.message });
    } else {
      res.status(500).json({ error: 'Unknown error' });
    }
  }
};
