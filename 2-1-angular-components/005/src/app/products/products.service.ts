import { IProduct } from './product.interface.ts'

export class ProductsService {
  public products: IProduct[] = [
    { name: 'Milk', price: 1.05 },
    { name: 'Salami', price: 2.5 },
    { name: 'Bread', price: 0.85 },
  ]
}
