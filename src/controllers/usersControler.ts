import rescue from 'express-rescue';
import UsersService from '../services/usersService';

const createUser = rescue(async (req, res) => {
  const { username, classe, level, password } = req.body;
  const token = await UsersService.createUser({ username, classe, level, password });
  return res.status(201).json({ token });
});

export default { createUser };
