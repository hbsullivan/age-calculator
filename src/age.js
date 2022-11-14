export default class Age {
  constructor(years, expectancy){
    this.years = years;
    this.expectancy = expectancy;
  }

  mercury() {
    return Math.trunc(this.years/(.24));
  }

  mercuryEx() {
    return Math.trunc(((this.expectancy - this.years)/(.24)));
  }

  venus() {
    return Math.trunc(this.years/(.62));
  }

  venusEx() {
    return Math.trunc(((this.expectancy - this.years)/(.62)));
  }

  mars() {
    return Math.trunc(this.years/(1.88));
  }

  jupiter() {
    return Math.trunc(this.years/(11.86));
  }
}
