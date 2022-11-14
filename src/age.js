export default class Age {
  constructor(years){
    this.years = years;
  }

  mercury() {
    return Math.trunc(this.years/(.24));
  }
}
