import { Category, Product } from '../src/type-aliase'

describe('This type aliase', function() {
  it('Should type aliase', function() {
    const category: Category = {
      id: 1,
      name: 'Handphone'
    }

    const product: Product = {
      id: 1,
      name: 'Iphone XR',
      price: 1000000,
      category: category
    }

  })
})