const drinksData = require('../data/prices.json')
const ordersData = require('../data/orders.json')
const paymentsData = require('../data/payments.json')

const Coffee = require('./coffee.js')
const User = require('./user.js')
const parsers = require('../utils/parsers')

const users = []

const coffees = parsers.parsePrices(drinksData, Coffee)
const ordersHistory = parsers.generateCoffeePrices(ordersData, coffees)
parsers.parsePayments(paymentsData, User, users)
parsers.parseOrders(ordersHistory, User, users)

const usersWithBalance = users.map(user => ({ ...user, balance: user.calculateBalance() }))

const userInJson = JSON.stringify(usersWithBalance)
console.log(userInJson)

