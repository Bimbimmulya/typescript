import { Customer, CustomerType } from '../src/type-enum';

describe('This enum', function() {
  it('Should support TypeScript', function() {
    const customer: Customer = {
      id: 1,
      name: 'Bimbim',
      tpye: CustomerType.GOLD
    }
    
    console.info(customer)

  })
})
