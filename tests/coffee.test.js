const Coffee = require('../src/coffee')

const coffee = { drinkName: 'supermochacrapucaramelcream', prices: { large: 5, huge: 5.5, mega: 6, ultra: 7 } }
// create the correctt instances
// read the correct name 
// get the correct price

describe('Coffee', () => {
  let coffee1 = new Coffee('supermochacrapucaramelcream', { large: 5, huge: 5.5, mega: 6, ultra: 7 })

  it('creates the correct instance', () => {
    expect(coffee.drinkName).toEqual('supermochacrapucaramelcream')
    expect(coffee.prices['large']).toEqual(5)
    expect(coffee.prices['huge']).toEqual(5.5)
    expect(coffee.prices['mega']).toEqual(6)
    expect(coffee.prices['ultra']).toEqual(7)
  })

  it('gets the correct price according to its size', () => {
    expect(coffee.prices['large']).toEqual(coffee1.getPrice('large'))
    expect(coffee.prices['huge']).toEqual(coffee1.getPrice('huge'))
    expect(coffee.prices['mega']).toEqual(coffee1.getPrice('mega'))
    expect(coffee.prices['ultra']).toEqual(coffee1.getPrice('ultra'))
  })
})