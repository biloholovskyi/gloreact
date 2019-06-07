let employers = ['Alex', '', 'ludmila', 'Viktor', '', 'oleg', 'iNna', 'Ivan', 'Alex', 'Olga', ' Ann'];

class Employers {
  constructor({emp = ['Alex', 'Denial']} = {}) {
    this.emp = emp;
  }
  createNormal() {
    return this.emp.map((item) => item.toLowerCase().trim()).filter((employers) => employers.length > 0);
  }
}

let employersNames = new Employers({emp: employers});

export default employersNames;