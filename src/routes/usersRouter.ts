import Express from 'express';
import UserController from '../controllers/usersControler';

const router = Express.Router();

router.route('/').post(UserController.createUser);

export default router;
