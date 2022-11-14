
describe('Age', () => {

  test('should correctly create an age object with an years value', () => {
    const age = new Age(25);
    expect(age.years).toEqual(25);
  })
})