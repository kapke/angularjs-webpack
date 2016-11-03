//9/ Let's move data into service
export function AppService() {
	return {
		products: [
			{ name: 'Milk', price: 1.05 },
			{ name: 'Salami', price: 2.5 },
			{ name: 'Bread', price: 0.85 },
		]
	};
}