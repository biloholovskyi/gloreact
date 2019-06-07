let employers = ['Alex', '', 'ludmila', 'Viktor', '', 'oleg', 'iNna', 'Ivan', 'Alex', 'Olga', ' Ann'];

employersNames = employers.map((item) => item.toLowerCase().trim()).filter((employers) => employers.length > 0);

let sponsors = {
  cash: [40000, 5000, 30400, 12000],
  eu: ['SRL', 'PLO', 'J&K'],
  rus: ['RusAuto', 'SBO']
};
const {cash, eu, rus, eu: [srl]} = sponsors;

makeBusiness = ({owner = 'Dan', director = 'Victor', cash = '1000', emp = ['alex', 'dmitri']} = {}) => {
  console.log(`We have a business. Owner: ${owner}, director: ${director}. Our budget: ${cash}. And our employers: ${emp}`);
  console.log('And we have a sponsors: ');
  console.log(...eu, ...rus, 'unexpected sponsor');
  console.log(`Note. Be careful with ${srl} It's a huge risk.`);
}
makeBusiness({owner: 'Sam', cash: cash.reduce((previousValue, currentValue) => previousValue + currentValue), emp: employersNames});