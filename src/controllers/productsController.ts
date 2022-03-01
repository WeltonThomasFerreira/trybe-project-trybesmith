import { Request, Response, NextFunction } from 'express';
import ProductsService from '../services/productsService';
import HttpError from '../errors/httpError';

const INTERNAL_SERVER_ERROR = { error: 'Internal Server Error' };

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
    return res.status(500).json(INTERNAL_SERVER_ERROR);
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
    return res.status(500).json(INTERNAL_SERVER_ERROR);
  }
};

export const getAllProducts = async (req: Request, res: Response) => {
  try {
    const products = await ProductsService.getAllProducts();
    return res.status(200).json(products);
  } catch (error) {
    if (error instanceof HttpError) {
      return res.status(error.code).json({ error: error.message });
    }
    return res.status(500).json(INTERNAL_SERVER_ERROR);
  }
};
