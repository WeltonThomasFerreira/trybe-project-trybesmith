import express from 'express';
import usersRouter from './routes/usersRouter';
import loginRouter from './routes/loginRouter';

const app = express();

app.use(express.json());
app.use('/users', usersRouter);
app.use('/login', loginRouter);

export default app;
