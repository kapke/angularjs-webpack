import * as angular from 'angular';

import IComponentOptions = angular.IComponentOptions;
import {Product} from './Product';

class AppComponentController {
    constructor (public products: Product[]) {
    }
}

export const AppComponent: IComponentOptions = {
    controller: ['products', AppComponentController],
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

