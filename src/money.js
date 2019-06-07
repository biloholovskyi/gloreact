let sponsors = {
  cash: [40000, 5000, 30400, 12000],
  eu: ['SRL', 'PLO', 'J&K'],
  rus: ['RusAuto', 'SBO']
};

class Sponsor {
  constructor(sponsor = {cash: ['100'], eu: ['EU'], rus: ['RU']}) {
    this.cash = sponsor.cash;
    this.eu = sponsor.eu;
    this.rus = sponsor.rus;
    this.risk = sponsor.eu[0];
  }
  money() {
    return this.cash.reduce((previousValue, currentValue) => previousValue + currentValue);
  }
  getSponsors() {
    console.log(...this.eu, ...this.rus, 'unexpected sponsor');
  }
  getRiskSponsors() {
    return this.risk;
  }
}

let newSponsors = new Sponsor(sponsors);
export default newSponsors;