import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import UsersModel from '../models/usersModel';

dotenv.config();

interface IInputUser {
  username: string;
  classe: string;
  level: number;
  password: string;
}

const createUser = async (user: IInputUser): Promise<string> => {
  const { id, username } = await UsersModel.createUser(user);
  return jwt.sign({ data: { id, username } }, process.env.JWT_SECRET as string);
};

export default { createUser };
