const express = require('express');
const { getAll, getById, create, update, deleteById } = require('./models/customer');
const app = express();
const port = 3001;

// Faz a conversão dos dados para JSON identico ao body-parser
app.use(express.json());

app.get('/customers', async (req, res) => {
  try {
    const customers = await getAll();
    return res.status(200).json({ customers });
  } catch (err) {
    console.log(err);
    return res.status(500).end();
  }

});

app.get('/customers/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const customer = await getById(id);
    return res.status(200).json({ customer });
  } catch (err) {
    console.log(err);
    return res.status(500).end();
  }
});

app.post('/customers', async (req, res) => {
  try{
    const { name, email, cpf, password } = req.body;
    const customer = await create({name, email, cpf, password});
      return res.status(201).json(customer)
  }catch(err) {
    console.log(err);
    return res.status(500).end();
  }
});

app.put('/customers/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, cpf, password } = req.body;
    const customer = await update({name, email, cpf, password, id});
    return res.status(200).json(customer)

  } catch (error) {
    console.log(err);
    return res.status(500).end();
  }
})

app.delete('/customers/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await deleteById(id);
    return res.status(200).end();
  } catch(err) {
    console.log(err);
    return res.status(500).end();
  }
})

app.listen(port, () => console.log(`Running..... ${port}`));

