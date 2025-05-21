import { Employee, Manager } from '../src/extends-interface'

describe('This extends interface', () => {
  it('Support extends inteface', () => {
    const employee: Employee = {
      id: '1',
      name: 'Bimbim',
      division: 'IT'
    }

    const manager: Manager = {
      id: '2',
      name: 'Hans Mayson',
      division: 'IT',
      numberOfEmployee: 10
    }

    expect(employee).toStrictEqual({
      id: '1',
      name: 'Bimbim',
      division: 'IT'
    })
    console.info(employee, '<-- employee');
    console.info(manager, '<--- manager');
  })
})