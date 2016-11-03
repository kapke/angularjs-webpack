import angular from 'angular';
import { AppController } from './app/app';

//3/ Our first controller
angular
	.module('app', [])
	.controller('AppController', AppController);