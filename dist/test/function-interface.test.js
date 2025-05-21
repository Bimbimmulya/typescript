describe('This Function Interface', () => {
    it('Support Function Interface', () => {
        const add = (value1, value2) => {
            return value1 + value2;
        };
        expect(add(2, 2)).toBe(4);
        console.info(add(1, 3));
    });
});
export {};
