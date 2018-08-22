import angular from 'angular';
import layout from './layout';

export default angular.
module('gildedRose.Routes', [
  layout.name
]).
config([
  '$locationProvider',
  '$routeProvider',
  ($locationProvider, $routeProvider) => {
    $locationProvider.hashPrefix('');
    $routeProvider
      .when('/', {
        template: '<layout-component page="home"></layout-component>',
      });
  }
]);
