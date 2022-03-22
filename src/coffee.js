class Coffee {
  constructor(drinkName, prices) {
    this.drinkName = drinkName
    this.prices = prices
  }

  getPrice(size) {
    return this.prices[size]
  }

}

module.exports = Coffee