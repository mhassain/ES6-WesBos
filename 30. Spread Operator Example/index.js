/*======Spread Operator========*/

const deepDish = {
	pizzaName: 'Deep Dish',
	size : 'Medium',
	ingredients: ['Marinara', 'Italian Sausage', 'Dough', 'Cheese']
};

const shoopingList = ['Milk', 'Flour', ...deepDish.ingredients];
console.log(shoopingList);