//5/ So we inject AppService to obtain data to show from it
export function AppController(AppService) {
	const vm = this;
	
	vm.products = AppService.products;
}