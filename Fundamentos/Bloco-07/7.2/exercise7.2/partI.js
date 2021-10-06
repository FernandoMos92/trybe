const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};
// 1 - Complete a função customerInfo() para que seu retorno seja similar a "Olá Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, R. Rua das Flores, Nº: 389, AP: 701".
// º Note que o parâmetro da função já está sendo passado na chamada da função.
const customerInfo = (order) => {
  // Adicione abaixo as informações necessárias.
  const personDelivery = Object.values(order.order.delivery)[0];
  const client = Object.values(order)[0];
  const phoneClient = Object.values(order)[1];
  console.log(`Olá ${personDelivery}, entrega para: ${client}, Telefone: ${phoneClient}, R.${order.address.street}, Nº${order.address.number}, AP:${order.address.apartment}`) 
}

customerInfo(order);

//2 - Complete a função orderModifier() para que seu retorno seja similar a "Olá Luiz Silva, o total do seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ 50,00."

// º Modifique o nome da pessoa compradora.
// º Modifique o valor total da compra para R$ 50,00.
const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.
  order.name = 'Luiz Silva';
  order.payment = 50

  console.log(`Olá ${order.name}, o total do seu pedido de ${Object.keys(order.order.pizza)[0]}, ${Object.keys(order.order.pizza)[1]} e ${order.order.drinks.coke.type} é R$${order.payment}.00`);
}

orderModifier(order);