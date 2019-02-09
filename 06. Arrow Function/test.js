// arrow function //
const names = ['wes', 'kait', 'lux'];

// normal function 
const fullNames = names.map(function(name){
	return `${name} bos `;
});
console.log(fullNames);



const names2 = ['wes', 'kait', 'lux'];

// arrow function
const fullNames2 = names2.map((name) => {
	return `${name} box`;
});
console.log(fullNames2);

const names3 = ['wes', 'kait', 'lux'];

// without parenthesis
const fullNames3 = names3.map(name =>{
	return `${name} sox`;
});
console.log(fullNames3);


const names4 = ['wes', 'kait', 'lux'];

// without return keyword
const fullNames4 = names4.map(name => `${name} fox`);
console.log(fullNames4);

const names5 = ['wes', 'kait', 'lux'];

// without arguments 
const fullnames5 = names5.map(() => `cool bos `);
console.log(fullnames5);

/* arrow function are always annonyms function*/

const sayMyName = (name) => {console.log(`Hello ${name}! `)};
sayMyName('Mahade')