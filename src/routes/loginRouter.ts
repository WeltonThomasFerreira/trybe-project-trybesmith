import Express from 'express';
import { validateLogin, login } from '../controllers/loginController';

const router = Express.Router();

router.route('/').post(validateLogin, login);

export default router;
