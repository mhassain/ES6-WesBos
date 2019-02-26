/*======= For of Loop ========*/

const cuts = ['chuck', 'Brisket', 'Shank', 'Short Rib'];

for (const cut of cuts){
	console.log(cut);
};

for (const cut in cuts){
	console.log(cut);
}




function addUpNumbers(){
	let total = 0;
	for (num of arguments){
		total += num; 
	}
	console.log(total);
	return total;
}

addUpNumbers(10,23, 52, 34, 12, 13, 123);


const name = 'Mahade Hasan';
for (char of name){
	console.log(char);
}

