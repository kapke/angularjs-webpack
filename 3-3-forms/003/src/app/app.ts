import * as angular from 'angular';
import 'angular-messages';

import {ProductsService} from "./products.service";
import {AppComponent} from "./app.component";
import {OrderFormComponent} from "./order.component";
import {fullNameDirective} from "./fullName.directive";


angular.module('app', ['ngMessages'])
    .component('appComponent', AppComponent)
    .service('productsService', ProductsService)
    .component('orderForm', OrderFormComponent)
    .directive('fullName', fullNameDirective);