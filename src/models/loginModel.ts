// import { RowDataPacket } from 'mysql2';
import connection from './connection';
import { ILogin, TLogin } from '../interfaces/login/loginInterface';

const login = async (userLogin: ILogin) => {
  const sql = 'SELECT id FROM Trybesmith.Users WHERE username = ? AND password = ?';
  const values = [userLogin.username, userLogin.password];
  const [rows] = await connection.execute(sql, [...values]);
  const [{ id }] = rows as TLogin;
  return id;
};

export default { login };
