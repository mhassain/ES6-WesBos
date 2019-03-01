/*=========Spreading into a function========*/
// array into a function

const inventors = ['Einstein', 'Newton', 'Galileo'];
const newInventors = ['Musk', 'Jobs'];

inventors.push(...newInventors);

console.log(inventors);


// parameter into a function

const name = ["Mahade", "hasan"];

function sayHi(first, last){
	console.log(`Hi! ${first} ${last}`);
}

sayHi(...name);