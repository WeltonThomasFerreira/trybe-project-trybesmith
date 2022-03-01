import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import Joi from 'joi';
import {
  USERNAME_IS_REQUIRED,
  PASSWORD_IS_REQUIRED,
  LOGIN_IS_INVALID,
} from '../errors/loginErrors';
import { ILogin } from '../interfaces/login/loginInterface';
import LoginModel from '../models/loginModel';

dotenv.config();

const validateUsername = async (username: string): Promise<void> => {
  const schema = Joi.string().required().error(USERNAME_IS_REQUIRED);
  await schema.validateAsync(username);
};

const validatePassword = async (password: string): Promise<void> => {
  const schema = Joi.string().required().error(PASSWORD_IS_REQUIRED);
  await schema.validateAsync(password);
};

const login = async (userLogin: ILogin): Promise<string> => {
  try {
    const { username } = userLogin;
    const id = await LoginModel.login(userLogin);
    const secret: jwt.Secret = process.env.SECRET || 'key';
    return jwt.sign({ data: { id, username } }, secret);
  } catch (error) {
    throw LOGIN_IS_INVALID;
  }
};

export default { validateUsername, validatePassword, login };
