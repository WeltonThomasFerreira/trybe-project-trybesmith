import Express from 'express';
import {
  createNewProduct,
  validateNewProduct,
  getAllProducts,
} from '../controllers/productsController';

const router = Express.Router();

router
  .route('/')
  .post(validateNewProduct, createNewProduct)
  .get(getAllProducts);

export default router;
