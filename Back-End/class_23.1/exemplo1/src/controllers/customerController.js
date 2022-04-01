const customerModel = require('../models/customer');
const customerService = require('../services/customerService');

const getAll = async (req, res) => {
  try{
    const customers = await customerService.getAll();
    return res.status(200).json(customers)
  } catch(err){
    return res.status(500).send(err.message); 
  }
 }

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const customers = await customerService.getById(id);
    return res.status(200).json({ customers });
  } catch(err) {
    return res.status(500).send(err.message);
  }
}

const create = async (req, res) => {
  try{
    const { name, email, cpf, password } = req.body;
    const customers = await customerService.create(name, email, cpf, password);
    return res.status(201).json(customers)
  }catch(err) {
    console.log(err);
    return res.status(500).send(err.message);
  }
}

const update = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, cpf, password } = req.body;
    const customer = await customerModel.update({name, email, cpf, password, id});
    return res.status(200).json(customer)

  } catch (error) {
    console.log(err);
    return res.status(500).end();
  }
}

const destroy = async (req, res) => {
  try {
    const { id } = req.params;
    await customerModel.deleteById(id);
    return res.status(200).end();
  } catch(err) {
    console.log(err);
    return res.status(500).end();
  }
}

module.exports = {
  getAll,
  getById,
  create,
  update,
  destroy
}