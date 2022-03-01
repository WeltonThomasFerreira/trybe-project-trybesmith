import Express from 'express';
import validateAuthorization from '../middlewares/validateAuthorization';
import {
  createNewProduct,
  validateNewProduct,
} from '../controllers/productsController';

const router = Express.Router();

router
  .route('/')
  .post(validateAuthorization, validateNewProduct, createNewProduct);

export default router;
