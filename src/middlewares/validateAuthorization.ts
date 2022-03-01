import dotenv from 'dotenv';
import Joi from 'joi';
import jwt, { JsonWebTokenError } from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import HttpError from '../errors/httpError';

dotenv.config();

export const TOKEN_NOT_FOUND = new HttpError(401, 'Token not found');
export const INVALID_TOKEN = new HttpError(401, 'Invalid token');

const isInvalidToken = (error: HttpError | unknown) => {
  if (error instanceof JsonWebTokenError) {
    const invalidToken = /^(TokenExpiredError|JsonWebTokenError)$/;
    if (invalidToken.test(error.name)) throw INVALID_TOKEN;
    throw error;
  }
};

const isRequired = async (authorization: string | undefined) => {
  const schema = Joi.string().required().error(TOKEN_NOT_FOUND);
  await schema.validateAsync(authorization);
};

const isValid = async (authorization: string | undefined) => {
  try {
    const secret: jwt.Secret = process.env.SECRET || 'key';
    jwt.verify(authorization as string, secret);
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
    await isRequired(authorization);
    await isValid(authorization);
    next();
  } catch (error) {
    if (error instanceof HttpError) {
      return res.status(error.code).json({ error: error.message });
    }
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

export default validateAuthorization;
