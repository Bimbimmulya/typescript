describe('Data array', function() {
  it('Should data array', function() {
    const names : string[] = ['Bimbim Mulya Krismon', 'JL. Verina X Graha Raya Blok J No 28'];
    const noUrut : number[] = [1, 2, 3];

    console.info(names);
    console.info(noUrut);

  })
})

describe('Data read only Array', function() {
  it('Should data read only Array', function() {

    const address : ReadonlyArray<string> = ['JL. Verina X Graha Raya Blok J No 28'];

    console.info(address)

  })
})