const customerModel = require('../models/customer');

const getAll = async () => {
  try {
    const customers = await customerModel.getAll();
    return customers;
  } catch (err) {
    console.log(err);
    return new Error({ message: "Database problems"});
  }
}

const getById = async (id) => {
  try {
    const customer = await customerModel.getById(id);
    return customer;
  } catch (err) {
    console.log(err);
    return new Error({ message: "Database problems"});
  }
}

const create = async (name, email, cpf, password ) => {
  try{
    const customer = await customerModel.create({name, email, cpf, password});
    return customer;
  }catch(err) {
    console.log(err);
    return new Error({ message: "Database problems"});
  }
}

module.exports = {
  getAll,
  getById,
  create,

}