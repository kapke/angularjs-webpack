import * as angular from 'angular';
import IModule = angular.IModule

import { ProductsModule } from './products/products'
import { AppComponent } from './app.component'

//5/ Let's create a module for all components
export const ComponentsModule: IModule = angular
  .module('app.components', [
    ProductsModule.name,
  ])
  .component('app', AppComponent)
