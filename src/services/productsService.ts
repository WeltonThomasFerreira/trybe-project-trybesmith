import Joi from 'joi';
import {
  NAME_IS_REQUIRED,
  NAME_MUST_BE_STRING,
  NAME_MUST_BE_LONGER,
  AMOUNT_IS_REQUIRED,
  AMOUNT_MUST_BE_STRING,
  AMOUNT_MUST_BE_LONGER,
} from '../errors/productsErrors';
import ProductsModel from '../models/productsModel';
import { IInputProduct } from '../interfaces/products/productsInterface';

const validateName = async (name: string): Promise<void> => {
  const schema = Joi.object({
    isRequired: Joi.required().error(NAME_IS_REQUIRED),
    isString: Joi.string().error(NAME_MUST_BE_STRING),
    isLonger: Joi.string().min(3).error(NAME_MUST_BE_LONGER),
  });
  await schema.validateAsync({
    isRequired: name,
    isString: name,
    isLonger: name,
  });
};

const validateAmount = async (amount: string): Promise<void> => {
  const schema = Joi.object({
    isRequired: Joi.required().error(AMOUNT_IS_REQUIRED),
    isString: Joi.string().error(AMOUNT_MUST_BE_STRING),
    isLonger: Joi.string().min(3).error(AMOUNT_MUST_BE_LONGER),
  });
  await schema.validateAsync({
    isRequired: amount,
    isString: amount,
    isLonger: amount,
  });
};

const createNewProduct = async (product: IInputProduct) => ProductsModel.createNewProduct(product);

export default { validateName, validateAmount, createNewProduct };
