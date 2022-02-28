import Express from 'express';
import { validateNewUser, createNewUser } from '../controllers/usersControler';

const router = Express.Router();

router.route('/').post(validateNewUser, createNewUser);

export default router;
