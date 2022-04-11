import dotenv from 'dotenv';
import app from './app';

dotenv.config();

const PORT = process.env.NODE_LOCAL_PORT || 3001;

const server = app.listen(PORT, () => console.log(
  `Server is running on PORT: ${PORT}`,
));

export default server;
