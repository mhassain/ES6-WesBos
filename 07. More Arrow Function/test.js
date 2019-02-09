const race = '100m Dash';
const winners = ['Hunter Gath', 'Singa Song', 'Imda Bos'];

// returning an Object 
const win = winners.map((winner, i) => ({name: winner, race, place: i+1}) );
console.table(win);

const ages = [12, 13, 18, 20, 35, 49, 40, 56, 50, 60];
const old = ages.filter(age => age >= 20);
console.log(old);