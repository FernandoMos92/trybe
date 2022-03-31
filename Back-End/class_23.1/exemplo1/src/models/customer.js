const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  database: 'model_database',
  password: '251214',
  port: 3306
});

const getAll = async () => {
  const query = 'SELECT * FROM model_database.customer'
  const [customers] = await connection.execute(query);
  return customers;
}

const getById = async (id) => {
  const query = 'SELECT * FROM model_database.customer WHERE id =?'
  const [customer] = await connection.execute(query, [id]);
  return customer;
}

const create = async ({name, cpf, email, password}) => {
  const query = 'INSERT INTO customer (name, cpf, email, password) VALUES (?, ?, ?, ?)'
  const [{ insertId }] = await connection.execute(query, [name, email, cpf, password]);
  return {
    id: insertId,
    name, 
    email, 
    cpf, 
    password}
};

const update = async ({ id, name, cpf, email, password}) => {
  const query = 'UPDATE customer SET name = ?, cpf = ?, email = ?, password = ? WHERE id = ?';

  await connection.execute(query, [name, email, cpf, password, id ]);
  return {
    id, 
    name, 
    email, 
    cpf, 
    password
  }
}

const deleteById = async (id) => {
  const query = 'DELETE FROM customer WHERE id = ?';
  await connection.execute(query, [id])
}

module.exports = {
  getAll,
  getById,
  create,
  update,
  deleteById,
}