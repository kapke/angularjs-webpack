import { IProduct } from './product.interface'
import IComponentOptions = angular.IComponentOptions;

//21/ Whole logic and view are now in ProductsComponent
export const ProductsComponent: IComponentOptions = {
  controller: ['Products', class {
    public products: IProduct[];

    constructor(Products: any) {
      this.products = Products.products
    }
  }],
  template: `
    <div>
      <h1>Shopping list</h1>
      <ul>
        <li ng-repeat="product in $ctrl.products">
          {{ product.name }} - {{ product.price | currency }}
        </li>
      </ul>
    </div>
  `,
}
