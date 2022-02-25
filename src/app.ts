import express from 'express';
import errorHandler from './middlewares/errorHandler';
import usersRouter from './routes/usersRouter';

const app = express();

app.use(express.json());
app.use('/users', usersRouter);
app.use(errorHandler);

export default app;
