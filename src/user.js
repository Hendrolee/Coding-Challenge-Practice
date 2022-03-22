class User {
  constructor(name, initialSpending = 0, initialSavings = 0) {
    this.name = name
    this.spending = initialSpending
    this.savings = initialSavings
  }

  receivePayment(amount) {
    this.savings += amount
  }

  accumulateSpending(price) {
    this.spending += price
  }

  calculateBalance() {
    return this.savings - this.spending
  }
}

module.exports = User