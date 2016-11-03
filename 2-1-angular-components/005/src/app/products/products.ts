import * as angular from 'angular';
import IModule = angular.IModule

import { ProductsComponent } from './products.component'
import { ProductsService } from './products.service'
import { ProductsAddComponent } from './add/products-add.component'


export const ProductsModule: IModule = angular
  .module('app.components.products', [])
  .component('products', ProductsComponent)
  .component('productsAdd', ProductsAddComponent)
  .service('Products', ProductsService)
