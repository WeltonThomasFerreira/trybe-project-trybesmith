import express from 'express';
import usersRouter from './routes/usersRouter';
import loginRouter from './routes/loginRouter';
import productsRouter from './routes/productsRouter';

const app = express();

app.use(express.json());
app.use('/users', usersRouter);
app.use('/login', loginRouter);
app.use('/products', productsRouter);

export default app;
