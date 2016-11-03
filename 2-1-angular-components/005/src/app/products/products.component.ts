import * as angular from 'angular';
import IComponentOptions = angular.IComponentOptions;

import {IProduct} from './product.interface';

import './products.styl'


export const ProductsComponent: IComponentOptions = {
    controller: ['Products', class {
        public products: IProduct[];

        constructor(Products: any) {
            this.products = Products.products
        }

        //3/ 2. From controller side everything looks as usual
        public addProduct(newProduct: IProduct): void {
            this.products.push(newProduct)
        }
    }],
    //11/ 1. We use output binding just by providing special argument with expression inside
    template: `
    <div>
      <h1>Shopping list</h1>
      <ul>
        <li ng-repeat="product in $ctrl.products" class="listElement">
          {{ product.name }} - {{ product.price | currency }}
        </li>
      </ul>
      <products-add on-product-added="$ctrl.addProduct(newProduct)"></products-add>
    </div>
  `,
}
