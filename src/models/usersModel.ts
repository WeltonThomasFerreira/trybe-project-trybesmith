import { OkPacket } from 'mysql2';
import connection from './connection';
import { IInputUser, IUser } from '../interfaces/userInterface';

const createNewUser = async (user: IInputUser): Promise<IUser> => {
  const sql = `INSERT INTO Trybesmith.Users (username, classe, level, password) 
  VALUES (?, ?, ?, ?)`;
  const values = [user.username, user.classe, user.level, user.password];
  const [rows] = await connection.execute<OkPacket>(sql, [...values]);
  return {
    id: rows.insertId,
    username: user.username,
  };
};

export default { createNewUser };
