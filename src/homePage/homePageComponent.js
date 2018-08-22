import angular from 'angular';
import template from './template.txt.html';

export default angular.module('gildedRose.homePage', []).
component('homePage', {
  template: template,
  bindings: {
    hello: '@'
  },
  controller: [function homePageController() {
    this.testito = this.testito || 'nope';
  }],
});
