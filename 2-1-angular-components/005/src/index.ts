import './index.styl'

import * as angular from 'angular'
import { ComponentsModule } from './app/app'

angular
  .module('app', [
    ComponentsModule.name,
  ])
