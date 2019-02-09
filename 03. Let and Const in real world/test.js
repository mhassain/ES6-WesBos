// IIFE //
(function(){
	var name = 'Mahade hasan';
	console.log(name);
})();
console.log(name); // nothing to show.


{
	const fname = "mehedi";
	console.log(fname);
}
//console.log(fname); // undefined


for(var i = 0; i < 10; i++){
	console.log(i);
	setTimeout(function(){
		console.log('The Number is ' +i);
	}, 1000);
}

for(let i = 0; i < 10; i++){
	console.log(i);
	setTimeout(function(){
		console.log('The Number is ' +i);
	},1000);
}