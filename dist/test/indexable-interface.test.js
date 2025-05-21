describe('This indexable interface', () => {
    it('Support indexable interface', () => {
        const names = ['Doni', 'Keken', 'Hans'];
        expect(names[2]).toBe('Hans');
        console.info(names[0], '<---- 0');
        console.info(names[1], '<---- 1');
        console.info(names[2], '<---- 2');
    });
});
export {};
