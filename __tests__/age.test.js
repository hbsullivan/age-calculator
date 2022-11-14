import Age from './../src/age.js';

describe('Age', () => {

  test('should correctly create an age object with an years value', () => {
    const age = new Age(25);
    expect(age.years).toEqual(25);
  })

  test('should return the years in Mercury time', () => {
    const age = new Age(25);
    expect(age.mercury()).toEqual(104)
  })
})