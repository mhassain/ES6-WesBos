/*======Rest Perameter========*/
function convertCurrency(rate, tax, tip, ...amounts){
	console.log(rate, tax, tip, amounts);
	return amounts.map(amount => amount * rate);
}

const amounts = convertCurrency(1.54, 10, 23, 52, 56);
console.log(amounts);

// example-2
const runner = ['Mahade Hasan', 123, 5.5, 5, 3, 6, 35];
const [name, id, ...runs] = runner;
console.log(name, id, runs);

const team = ['Wes', 'Kait', 'Lux', 'Sheena', 'Kelly'];
const [captain, assistant,...players] = team;
console.log (captain, assistant, players);