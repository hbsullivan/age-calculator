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
}
