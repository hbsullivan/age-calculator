import Age from './../src/age.js';

describe('Age', () => {

  test('should correctly create an age object with years and life expectancy values', () => {
    const age = new Age(25,81);
    expect(age.years).toEqual(25);
    expect(age.expectancy).toEqual(81);
  })

  test('should return the years in Mercury time', () => {
    const age = new Age(25);
    expect(age.mercury()).toEqual(104);
  })

  test('should return the years in Venus time', () => {
    const age = new Age(25);
    expect(age.venus()).toEqual(40);
  })

  test('should return the years in Mars time', () => {
    const age = new Age(25);
    expect(age.mars()).toEqual(13);
  })

  test('should return the years in Jupiter time', () => {
    const age = new Age(25);
    expect(age.jupiter()).toEqual(2);
  })

  test('should return how many years are left on Mercury', () => {
    const age = new Age(25, 81);
    expect(age.mercuryEx()).toEqual(233)
  })
})