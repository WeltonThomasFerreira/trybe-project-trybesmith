import { Request, Response, NextFunction } from 'express';
import ProductsService from '../services/productsService';
import HttpError from '../errors/httpError';

export const validateNewProduct = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { name, amount } = req.body;
    await ProductsService.validateName(name);
    await ProductsService.validateAmount(amount);
    next();
  } catch (error) {
    if (error instanceof HttpError) {
      return res.status(error.code).json({ error: error.message });
    }
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const createNewProduct = async (req: Request, res: Response) => {
  try {
    const { name, amount } = req.body;
    const newProduct = await ProductsService.createNewProduct({ name, amount });
    return res.status(201).json(newProduct);
  } catch (error) {
    if (error instanceof HttpError) {
      return res.status(error.code).json({ error: error.message });
    }
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};
