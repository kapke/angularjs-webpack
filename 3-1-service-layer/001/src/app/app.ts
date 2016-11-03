import * as angular from "angular";

import {ProductsService} from "./products.service";
import {AppComponent} from "./app.component";


angular.module("app", [])
    .component("appComponent", AppComponent)
    .service("productsService", ProductsService);