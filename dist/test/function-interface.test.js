describe('This Function Interface', () => {
    it('Support Function Interface', () => {
        const add = (value1, value2) => {
            return value1 + value2;
        };
        expect(add(2, 2)).toBe(4);
        // console.info(add(1, 3))
    });
    it('Support Function Interface', () => {
        //  Implementasi dari Interface di JavaScript sebenarnya adalah sebuah object
        // Seperti yang kita tahu, di JavaScript, kita bisa menambahkan function sebagai attribute di object
        // Hal ini juga bisa kita lakukan di Interface
        const person = {
            name: 'Bimbim',
            sayHallo: function (name) {
                return `Hello ${name}, my name is ${this.name}`;
            }
        };
        console.info(person.sayHallo('Alika'));
    });
});
export {};
