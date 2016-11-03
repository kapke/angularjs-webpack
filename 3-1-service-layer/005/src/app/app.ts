import * as angular from 'angular';

import {ProductsService} from "./products.service";
import {AppComponent} from "./app.component";
import {ProductsProvider} from "./products.provider";


angular.module('app', [])
    .component('appComponent', AppComponent)
    .service('productsService', ProductsService)
    .provider('products', ProductsProvider)
    .constant('ENABLE_DOUBLING', true)
    //2/ Finally we can use 'ngInject' directive to tell ngAnnotate to create explicit declarations.
    .config((productsProvider: ProductsProvider, ENABLE_DOUBLING: boolean) => {
        'ngInject';
        if (ENABLE_DOUBLING) {
            productsProvider.enableDoubling();
        }
    });