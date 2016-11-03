import * as angular from 'angular';

import IComponentOptions = angular.IComponentOptions;
import {ProductsService} from "./products.service";
import {Product} from './Product';

class AppComponentController {
    public products: Product[] = [];

    constructor (productsService: ProductsService) {
        'ngInject';
        this.products = productsService.getProducts();
    }
}

export const AppComponent: IComponentOptions = {
    controller: AppComponentController,
    template: `
        <div>
            <h1>Shopping list</h1>
            <ul>
                <li ng-repeat="product in $ctrl.products">
                    {{ product.name }} - {{ product.price | currency }}
                </li>
            </ul>
        </div>
    `
};

