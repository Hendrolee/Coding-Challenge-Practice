function parsePayments(payments, user_class, users) {
  return payments.map(payment => {
    const isExistingUser = users.map(user => user.name).includes(payment.user)

    if (isExistingUser) {
      // update existing user
      users.find(user => user.name === payment.user).receivePayment(payment.amount)
    } else {
      // create new user
      users.push(new user_class(payment.user, undefined, payment.amount))
    }
  })
}

function parsePrices(drinks, coffee_class) {
  return drinks.map(drink => new coffee_class(drink.drink_name, drink.prices))
}

function generateCoffeePrices(orders, coffees) {
  return orders.map(order => {
    order.price = coffees.find(coffee => order.drink === coffee.drinkName).getPrice(order.size)
    return order
  })
}

function parseOrders(ordersHistory, user_class, users) {
  return ordersHistory.map(order => {
    const isExistingUser = users.map(user => user.name).includes(order.user)

    if (isExistingUser) {
      // update existing user
      users.find(user => user.name === order.user).accumulateSpending(order.price)
    } else {
      // create new user
      users.push(new user_class(order.user, order.price))
    }
  })
}

module.exports = {
  parsePayments,
  parsePrices,
  generateCoffeePrices,
  parseOrders
}
