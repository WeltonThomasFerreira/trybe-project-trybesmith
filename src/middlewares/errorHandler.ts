// Não está funcionando, rescue em controller não pegam o erro
import { Request, Response } from 'express';
import { HttpError } from '../errors/userErrors';

const errorHandler = async (err: HttpError, _req: Request, res: Response) => {
  console.log(`Log de erro: ${err.message}`);
  return res
    .status(err.code || 500)
    .json({ error: err.message || 'Internal Server Error' });
};

export default errorHandler;
