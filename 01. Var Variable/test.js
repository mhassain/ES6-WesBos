// Declering Var //
var width = 100;
console.log (width);

var width = 200;
console.log(width);

// function scope
function setWidth(){
var fullWidth = 500; // inside var
console.log(fullWidth);
};
setWidth();
//console.log(fullWidth); // did not work outsite of function.

var age = 15;
if(age > 12){
var years = age * 2;
console.log(`You are ${years} years old.`);
}

