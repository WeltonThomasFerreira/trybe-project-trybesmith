import dotenv from 'dotenv';
import Joi from 'joi';
import jwt from 'jsonwebtoken';
import { CustomError } from 'ts-custom-error';
import { Request, Response, NextFunction } from 'express';

dotenv.config();

export class HttpError extends CustomError {
  public constructor(public code: number, message?: string) {
    super(message);
  }
}

export const TOKEN_NOT_FOUND = new HttpError(401, 'Token not found');
export const INVALID_TOKEN = new HttpError(401, 'Expired or invalid token');

const isInvalidToken = (error: Error | unknown) => {
  if (error instanceof HttpError) {
    const invalidToken = /^(TokenExpiredError|JsonWebTokenError)$/;
    if (invalidToken.test(error.name)) throw INVALID_TOKEN;
    throw error;
  }
};

const validate = async (authorization: string) => {
  try {
    const schema = Joi.string().required().error(TOKEN_NOT_FOUND);
    await schema.validateAsync(authorization);
    const secret: jwt.Secret = process.env.SECRET || 'key';
    jwt.verify(authorization, secret);
  } catch (error) {
    isInvalidToken(error);
  }
};

const validateAuthorization = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { authorization } = req.headers;
    await validate(authorization as string);
    next();
  } catch (error) {
    if (error instanceof HttpError) {
      return res.status(error.code).json({ error: error.message });
    }
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

export default validateAuthorization;
