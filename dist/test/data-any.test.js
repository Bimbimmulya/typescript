"use strict";
describe('Data type Any', function () {
    it('Should support data type Any', function () {
        const person = {
            id: 1,
            name: 'Bimbim Mulya Krismon',
            age: 30,
        };
        person.name = 'Bimbimmulya';
        person.address = 'JL. Verina X Graha Raya Blok J No 28';
        console.info(person);
    });
});
