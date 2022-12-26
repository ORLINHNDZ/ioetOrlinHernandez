try {
   describe('handle the amount of coincidences', () => {
  const matchingResults = require('./utils/numberOfCoincidences');  

  it('showcase if Expected is = to Received values', () => {
    const coincidences = matchingResults('./testingData.txt');
    
    expect(coincidences[0]).toBe('ORLIN-SANTIAGO: 3');
  });
}); 
} catch (error) {
    console.log(error)
}

