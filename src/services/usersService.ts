import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import Joi from 'joi';
import UsersModel from '../models/usersModel';
import { IInputUser } from '../interfaces/userInterface';
import {
  USERNAME_IS_REQUIRED,
  USERNAME_MUST_BE_STRING,
  USERNAME_MUST_BE_LONGER,
  CLASSE_IS_REQUIRED,
  CLASSE_MUST_BE_STRING,
  CLASSE_MUST_BE_LONGER,
  LEVEL_IS_REQUIRED,
  LEVEL_MUST_BE_NUMBER,
  LEVEL_MUST_BE_GREATER,
  PASSWORD_IS_REQUIRED,
  PASSWORD_MUST_BE_STRING,
  PASSWORD_MUST_BE_LONGER,
} from '../errors/userErrors';

dotenv.config();

const validateUsername = async (username: string): Promise<void> => {
  const schema = Joi.object({
    isRequired: Joi.required().error(USERNAME_IS_REQUIRED),
    isString: Joi.string().error(USERNAME_MUST_BE_STRING),
    isLonger: Joi.string().min(3).error(USERNAME_MUST_BE_LONGER),
  });
  await schema.validateAsync({
    isRequired: username,
    isString: username,
    isLonger: username,
  });
};

const validateClasse = async (classe: string): Promise<void> => {
  const schema = Joi.object({
    isRequired: Joi.required().error(CLASSE_IS_REQUIRED),
    isString: Joi.string().error(CLASSE_MUST_BE_STRING),
    isLonger: Joi.string().min(3).error(CLASSE_MUST_BE_LONGER),
  });
  await schema.validateAsync({
    isRequired: classe,
    isString: classe,
    isLonger: classe,
  });
};

const validateLevel = async (level: number): Promise<void> => {
  const schema = Joi.object({
    isRequired: Joi.required().error(LEVEL_IS_REQUIRED),
    isNumber: Joi.number().prefs({ convert: false }).error(LEVEL_MUST_BE_NUMBER),
    isGreater: Joi.number().greater(0).error(LEVEL_MUST_BE_GREATER),
  });
  await schema.validateAsync({
    isRequired: level,
    isNumber: level,
    isGreater: level,
  });
};

const validatePassword = async (password: string): Promise<void> => {
  const schema = Joi.object({
    isRequired: Joi.required().error(PASSWORD_IS_REQUIRED),
    isString: Joi.string().error(PASSWORD_MUST_BE_STRING),
    isLonger: Joi.string().min(8).error(PASSWORD_MUST_BE_LONGER),
  });
  await schema.validateAsync({
    isRequired: password,
    isString: password,
    isLonger: password,
  });
};

const createNewUser = async (user: IInputUser): Promise<string> => {
  const { id, username } = await UsersModel.createNewUser(user);
  const secret: jwt.Secret = process.env.SECRET || 'key';
  return jwt.sign({ data: { id, username } }, secret);
};

export default {
  createNewUser,
  validateUsername,
  validateClasse,
  validateLevel,
  validatePassword,
};
