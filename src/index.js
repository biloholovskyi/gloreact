import newSponsors from './money';
import employersNames from './employers';

class Index {
  constructor({owner = 'Danial', director = 'Victor', cash = '1000', emp = ['alex', 'dmitri']} = {}) {
    this.owner = owner;
    this.director = director;
    this.cash = cash;
    this.emp = emp;
  }

  make() {
    console.log(`We have a business. Owner: ${this.owner}, director: ${this.director}. Our budget: ${this.cash}. And our employers: ${this.emp}`);
    console.log('And we have a sponsors: ');
    newSponsors.getSponsors();
    console.log(`Note. Be careful with ${newSponsors.getRiskSponsors()} It's a huge risk.`);
  }
}

let newBusiness = new Index({owner: 'Sam',cash: newSponsors.money(), emp: employersNames.createNormal()});
newBusiness.make();