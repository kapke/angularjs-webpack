/// There we're using raw webpack import instead a TypeScript one
const { listElement } = require('./products.styl') // tslint:disable-line
import { IProduct } from './product.interface'
import IComponentOptions = angular.IComponentOptions;

export const ProductsComponent: IComponentOptions = {
  controller: ['Products', class {
    public products: IProduct[]

    constructor(Products: any) {
      this.products = Products.products
    }
  }],
  //7/ And custom class name in template
  template: `
    <div>
      <h1>Shopping list</h1>
      <ul>
        <li ng-repeat="product in $ctrl.products" class="${listElement}">
          {{ product.name }} - {{ product.price | currency }}
        </li>
      </ul>
    </div>
  `
};
