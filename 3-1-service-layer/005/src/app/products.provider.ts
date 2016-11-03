import * as angular from 'angular';
import IServiceProvider = angular.IServiceProvider;

import {ProductsService} from "./products.service";
import {Product} from './Product';

export class ProductsProvider implements IServiceProvider {
    private doubleProducts: boolean = false;

    public enableDoubling () {
        this.doubleProducts = true;
    }

    public $get (productsService: ProductsService) {
        'ngInject';
        if (this.doubleProducts) {
            return productsService.getProducts().concat(productsService.getProducts());
        } else {
            return productsService.getProducts();
        }
    }
}