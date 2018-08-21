import angular from 'angular';
import ngRoute from 'angular-route';
// import HomePage from './HomePage'

const app = angular.module('gildedRose', [ngRoute]);

app.component('homePage', {
  template: '<div> asdfkljadsfkj </div>'
});

app.config([
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

