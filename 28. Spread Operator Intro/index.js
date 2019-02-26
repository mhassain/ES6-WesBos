/*======Spread Operator=====*/

const featured = ['Deep Dish', 'Peperoni', 'Hawaiian'];
const specialty = ['Meatzza', 'Spicy Mama', 'Margherita'];
//const pizzas = featured.concat(specialty);
//console.log(pizzas);

const pizzas = [...featured, 'veg', ...specialty];

const fridayPizzas = pizzas;

console.log(pizzas);

const deepDish = {
	pizzaName: 'Deep Dish',
	size: 'Medium',
	ingredients: ['Marinara', 'Italian Sausage', 'Dough', 'Cheese']
};