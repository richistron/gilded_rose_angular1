import angular from 'angular';
import ngRoute from 'angular-route';
import routes from './routes';

const app = angular.module('gildedRose', [
  ngRoute,
  routes.name,
]);

export default app;
