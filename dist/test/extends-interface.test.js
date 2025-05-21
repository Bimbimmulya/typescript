describe('This extends interface', () => {
    it('Support extends inteface', () => {
        const employee = {
            id: '1',
            name: 'Bimbim',
            division: 'IT'
        };
        const manager = {
            id: '2',
            name: 'Hans Mayson',
            division: 'IT',
            numberOfEmployee: 10
        };
        expect(employee).toStrictEqual({
            id: '1',
            name: 'Bimbim',
            division: 'IT'
        });
        console.info(employee, '<-- employee');
        console.info(manager, '<--- manager');
    });
});
export {};
