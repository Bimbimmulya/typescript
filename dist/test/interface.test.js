describe('This interface', () => {
    it('Should interface', () => {
        const seller = {
            id: 1,
            name: 'Gas LPG Pangkalan',
            nib: '2412421',
            npwp: '125125252'
        };
        seller.name = 'LPG Pangkalan';
        // seller.nib = '2412421' can't assign cause type nib is readonly
        console.info(seller);
    });
});
export {};
