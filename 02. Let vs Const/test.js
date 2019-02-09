// Let vs Const // 

let points = 50;
let winner = false;

//let points = 60;// error->points has already declared.

points = 60; // updated.

if(points > 40){
	console.log("this let is separete variable.")
	let winner = true;
}

// const cannot be reassign //
const key = 'abc123';
	 // key = 'def456'; // cannot reassign.

// const Object Property can be updated //
const person = {
	name: 'Mahade',
	age: 30
};
console.log(person.age);

person.age = 28;
console.log(person.age);

// You can freeze Object //
const samePerson = Object.freeze(person);
console.log(samePerson);

person.name = "Hasan";
console.log(person.name);
