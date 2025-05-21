import { Domain } from '../src/intersection'

describe('This intersection', () => {
  it('Should Support intersection', () => {
    const domain: Domain = {
      id: '1',
      name: 'Pacul',
    }
    expect(domain.name).toBe('Pacul')
    console.info(domain.name)
  })
})