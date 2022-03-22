const User = require('../src/user.js')

const person = { name: 'Hendro', initialSpending: 12.0, intialSavings: 20.0 }


describe('User', () => {
  let user
  beforeEach(() => {
    user = new User(person.name, person.initialSpending, person.intialSavings)
  })

  it('creates the correct instance', () => {
    expect(user.name).toEqual(person.name)
    expect(user.spending).toEqual(person.initialSpending)
    expect(user.savings).toEqual(person.intialSavings)
  })

  it('adds amount to savings when receivePayment is called', () => {
    user.receivePayment(100)
    user.receivePayment(200)
    expect(user.savings).toEqual(320)
  })

  it('adds price to spending when accumulateSpending is called', () => {
    user.accumulateSpending(10)
    user.accumulateSpending(20)
    expect(user.spending).toEqual(42)
  })

  it('calculates balance/owes when calculateBalance is called', () => {
    expect(user.calculateBalance()).toEqual(8.0)
  })

})

//Write coffee test, individual parsers