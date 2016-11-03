import IComponentOptions = angular.IComponentOptions
import {IProduct} from "./products/product.interface";
import {ProductsService} from "./products/products.service";


export const AppComponent: IComponentOptions = {
  controller: ['Products', class {
    public fetchedProducts: IProduct[];

    constructor(Products: ProductsService) {
      this.fetchedProducts = Products.products;
    }
  }],
  /// We're passing data to component using attributes
  template: `<products products="$ctrl.fetchedProducts"></products>`,
}
