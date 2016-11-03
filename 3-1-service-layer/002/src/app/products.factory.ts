import {ProductsService} from "./products.service";
import {Product} from './Product';

export function ProductsFactory (productsService: ProductsService): Product[] {
    return productsService.getProducts();
}