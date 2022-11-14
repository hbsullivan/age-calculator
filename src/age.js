export default class Age {
  constructor(years, expectancy){
    this.years = years;
    this.expectancy = expectancy;
  }

  mercury() {
    return Math.trunc(this.years/(.24));
  }

  mercuryEx() {
    if(this.expectancy-this.years < 0){
      return Math.trunc(Math.abs(this.expectancy-this.years)/(.24));
    }else{
      return Math.trunc(((this.expectancy - this.years)/(.24)));
    }
  }

  venus() {
    return Math.trunc(this.years/(.62));
  }

  venusEx() {
    if(this.expectancy-this.years < 0){
      return Math.trunc(Math.abs(this.expectancy-this.years)/(.62));
    }else{
      return Math.trunc(((this.expectancy - this.years)/(.62)));
    }
  }

  mars() {
    return Math.trunc(this.years/(1.88));
  }

  marsEx() {
    if(this.expectancy-this.years < 0){
      return Math.abs(((this.expectancy-this.years)/(1.88)).toFixed(1));
    }else{
      return Math.trunc(((this.expectancy - this.years)/(1.88)));
    }
  }

  jupiter() {
    return Math.trunc(this.years/(11.86));
  }

  jupiterEx() {
    return Math.trunc(((this.expectancy - this.years)/(11.86)));
  }
}
