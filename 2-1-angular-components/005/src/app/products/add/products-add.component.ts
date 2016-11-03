import IComponentOptions = angular.IComponentOptions
import { IProduct } from '../product.interface'

export const ProductsAddComponent: IComponentOptions = {
  //3/ 3. ... using & binding
  bindings: {
    onProductAdded: '&',
  },
  controller: class {
    public newProduct: IProduct;
    // 4. Remember about proper declaration!
    public onProductAdded: Function;

    //7/ 2. Handling form submit is reduced to notify parent component by...
    public onSubmit(product: IProduct): void {
      this.onProductAdded(product);
      this.newProduct = {
        name: '',
        price: undefined,
      }
    }
  },
  //7/ 1. This is how our form look like.
  template: `
    <form ng-submit="$ctrl.onSubmit({ newProduct: $ctrl.newProduct })">
      <input ng-model="$ctrl.newProduct.name" placeholder="name" required>
      <input ng-model="$ctrl.newProduct.price" placeholder="price" type="number" step="0.01" required>
      <button>Save</button>
    </form>
  `,
}
