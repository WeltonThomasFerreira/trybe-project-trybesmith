import { OkPacket } from 'mysql2';
import connection from './connection';
import {
  IInputProduct,
  IProduct,
} from '../interfaces/products/productsInterface';

const createNewProduct = async (product: IInputProduct): Promise<IProduct> => {
  const sql = `INSERT INTO Trybesmith.Products (name, amount) 
  VALUES (?, ?)`;
  const values = [product.name, product.amount];
  const [rows] = await connection.execute<OkPacket>(sql, [...values]);
  return {
    item: {
      id: rows.insertId,
      name: product.name,
      amount: product.amount,
    },
  };
};

const getAllProducts = async () => {
  const sql = 'SELECT * FROM Trybesmith.Products';
  const [rows] = await connection.execute(sql);
  return rows;
};

export default { createNewProduct, getAllProducts };
