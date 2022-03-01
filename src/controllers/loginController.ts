import { Request, Response, NextFunction } from 'express';
import LoginService from '../services/loginService';
import { HttpError } from '../errors/loginErrors';

export const validateLogin = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { username, password } = req.body;
    await LoginService.validateUsername(username);
    await LoginService.validatePassword(password);
    next();
  } catch (error) {
    if (error instanceof HttpError) {
      return res.status(error.code).json({ error: error.message });
    }
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;
    const token = await LoginService.login({
      username,
      password,
    });
    return res.status(200).json({ token });
  } catch (error) {
    if (error instanceof HttpError) {
      return res.status(error.code).json({ error: error.message });
    }
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};
