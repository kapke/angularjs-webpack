import { IProduct } from './product.interface'
/// Thanks to typings we can use interfaces from Angular
import IComponentOptions = angular.IComponentOptions;

/// And using that interface helps us to properly configure the component
export const AppComponent: IComponentOptions = {
  //10/ Now controller and template are next to each other
  controller: ['AppService', class {
    public products: IProduct[];

    constructor(AppService: any) {
      this.products = AppService.products
    }
  }],
  template: `
    <div>
      <h1>Shopping list</h1>
      <ul>
        <!-- Now we're using $ctrl instead of vm -->
        <li ng-repeat="product in $ctrl.products">
          {{ product.name }} - {{ product.price | currency }}
        </li>
      </ul>
    </div>
  `,
}
