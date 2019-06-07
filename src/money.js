let sponsors = {
  cash: [40000, 5000, 30400, 12000],
  eu: ['SRL', 'PLO', 'J&K'],
  rus: ['RusAuto', 'SBO']
};
const {cash, eu, rus, eu: [srl]} = sponsors;

class Sponsor {
  constructor({cash = ['1000'], eu = ['EU'], rus = ['RU'], risk = 'risk'} = {}) {
    this.cash = cash;
    this.eu = eu;
    this.rus = rus;
    this.risk = risk;
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

let newSponsors = new Sponsor({cash: cash, eu: eu, rus: rus, risk: srl});
export default newSponsors;