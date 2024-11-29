import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

const secret = process.env.JWT_SECRET || 'your_jwt_secret';

export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req
    .header('Authorization')
    ?.replace('Bearer ', '');
  if (!token)
    return res
      .status(401)
      .json({ error: 'No token, authorization denied' });

  try {
    const decoded = jwt.verify(token, secret);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ error: 'Token is not valid' });
  }
};
