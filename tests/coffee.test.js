const Coffee = require('../src/coffee')

const rawCoffeeData = { drinkName: 'supermochacrapucaramelcream', prices: { large: 5, huge: 5.5, mega: 6, ultra: 7 } }
// create the correctt instances
// read the correct name 
// get the correct price

describe('Coffee', () => {
  let coffee = new Coffee('supermochacrapucaramelcream', { large: 5, huge: 5.5, mega: 6, ultra: 7 })

  it('creates the correct instance', () => {
    expect(coffee.drinkName).toEqual(rawCoffeeData.drinkName)
    expect(coffee.prices).toEqual(rawCoffeeData.prices)
  })

  it('gets the correct price according to its size', () => {
    expect(coffee.getPrice('large')).toEqual(rawCoffeeData.prices['large'])
    expect(coffee.getPrice('huge')).toEqual(rawCoffeeData.prices['huge'])
  })
})