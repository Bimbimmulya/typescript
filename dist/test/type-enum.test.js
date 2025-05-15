import { CustomerType } from '../src/type-enum';
describe('This enum', function () {
    it('Should support TypeScript', function () {
        const customer = {
            id: 1,
            name: 'Bimbim',
            tpye: CustomerType.GOLD
        };
        console.info(customer);
    });
});
