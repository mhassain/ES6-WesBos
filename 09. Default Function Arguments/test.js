// Default Function Arguments //
// process-1
function calculateBill(total, tax, tip){
	return total + (total * tax) + (total * tip);
}

const totalBill = calculateBill(100, 0.13, 0.15);
console.log(totalBill);

// process-2
function calculateBill2(total, tax, tip) {
	if(tax === undefined){
		tax = 0.13;
	}
	if(tip === undefined){
		tip = 0.15;
	}
	return total + (total * tax) + (total * tip);
}

const totalBill2 = calculateBill2(100);
console.log(totalBill2);

// process-3
function calculateBill3(total, tax, tip) {
	tax = tax || 0.13;
	tip = tip || 0.15;
	return total + (total * tax) + (total * tip);
}

const totalBill3 = calculateBill3(100);
console.log(totalBill3);

// process-4
function calculateBill4(total, tax = 0.13, tip=0.15) {
	return total + (total * tax) + (total * tip);
}

const totalBill4 = calculateBill4(100);
console.log(totalBill4);