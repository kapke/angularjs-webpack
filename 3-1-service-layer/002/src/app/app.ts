import * as angular from 'angular';

import {ProductsService} from "./products.service";
import {AppComponent} from "./app.component";
import {ProductsFactory} from "./products.factory";


angular.module('app', [])
    .component('appComponent', AppComponent)
    .service('productsService', ProductsService)
    .factory('products', ['productsService', ProductsFactory]);