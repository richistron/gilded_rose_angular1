import angular from 'angular'
import layout from './components/layout'

export default angular
  .module('gildedRose.Routes', [
    layout
  ])
  .config([
    '$locationProvider',
    '$routeProvider',
    ($locationProvider, $routeProvider) => {
      $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
      })
      $routeProvider
        .when('/', {
          template: '<layout></layout>'
        })
    }
  ]).name
