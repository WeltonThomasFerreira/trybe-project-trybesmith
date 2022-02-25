import { Request, Response } from 'express';

interface IErr {
  code: number;
  msg: string;
}

const errorHandler = async (err: IErr, _req: Request, res: Response) =>
  res
    .status(err.code || 500)
    .json({ message: err.msg || 'Internal Server Error' });

export default errorHandler;
