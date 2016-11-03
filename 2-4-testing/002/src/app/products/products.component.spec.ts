/// importing tested module
import './products'

describe('Module: Products', () => {

  describe('Controller: ProductsComponent', () => {

    /// preparing module to use in test
    beforeEach(angular.mock.module('app.components.products'))

    /// injecting component controller factory
    beforeEach(angular.mock.inject(($componentController: any) => {
      //5/ getting component controller instance and mocking it's dependencies
      this.$ctrl = $componentController('products', {
        Products: {
          products: [{ name: 'asd', price: 0 }],
        },
      })
    }))

    //3/ test 
    it('should have products injected from service', () => {
      expect(this.$ctrl.products.length).toBe(1)
    })

  })

})
