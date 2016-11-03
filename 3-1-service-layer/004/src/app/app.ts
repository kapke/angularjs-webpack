import * as angular from 'angular';

import {ProductsService} from "./products.service";
import {AppComponent} from "./app.component";
import {ProductsProvider} from "./products.provider";


angular.module('app', [])
    .component('appComponent', AppComponent)
    .service('productsService', ProductsService)
    .provider('products', ProductsProvider)
    .constant('ENABLE_DOUBLING', true)
    .config(['productsProvider', 'ENABLE_DOUBLING', function (productsProvider: ProductsProvider, ENABLE_DOUBLING: boolean) {
        if (ENABLE_DOUBLING) {
            productsProvider.enableDoubling();
        }
    }]);