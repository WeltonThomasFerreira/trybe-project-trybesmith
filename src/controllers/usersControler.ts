// import rescue from 'express-rescue';
import { Request, Response, NextFunction } from 'express';
import UsersService from '../services/usersService';
import { HttpError } from '../errors/userErrors';

export const validateNewUser = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { username, classe, level, password } = req.body;
    await UsersService.validateUsername(username);
    await UsersService.validateClasse(classe);
    await UsersService.validateLevel(level);
    await UsersService.validatePassword(password);
    next();
  } catch (error) {
    if (error instanceof HttpError) {
      return res.status(error.code).json({ error: error.message });
    }
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const createNewUser = async (req: Request, res: Response) => {
  try {
    const { username, classe, level, password } = req.body;
    const token = await UsersService.createNewUser({
      username,
      classe,
      level,
      password,
    });
    return res.status(201).json({ token });
  } catch (error) {
    if (error instanceof HttpError) {
      return res.status(error.code).json({ error: error.message });
    }
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};
