import { OkPacket } from 'mysql2';
import connection from './connection';

interface IInputUser {
  username: string;
  classe: string;
  level: number;
  password: string;
}

interface IUser {
  id: number;
  username: string;
}

const createUser = async (user: IInputUser): Promise<IUser> => {
  const sql = `INSERT INTO Trybesmith.Users (username, classe, level, password) 
  VALUES (?, ?, ?, ?)`;
  const values = [user.username, user.classe, user.level, user.password];
  const [rows] = await connection.execute<OkPacket>(sql, [...values]);
  return {
    id: rows.insertId,
    username: user.username,
  };
};

export default { createUser };
