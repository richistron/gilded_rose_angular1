import angular from 'angular';
import homePage from './homePage';

export default angular.
module('gildedRose.Routes', [
  homePage.name
]).
config([
  '$locationProvider',
  '$routeProvider',
  ($locationProvider, $routeProvider) => {
    $locationProvider.hashPrefix('');
    $routeProvider
      .when('/', {
        template: '<home-page></home-page>',
      });
  }
]);
