export default class Age {
  constructor(years){
    this.years = years;
  }

  mercury() {
    return Math.trunc(this.years/(.24));
  }

  venus() {
    return Math.trunc(this.years/(.62));
  }

  mars() {
    return Math.trunc(this.years/(1.88));
  }

  jupiter() {
    return Math.trunc(this.years/(11.86));
  }
}
