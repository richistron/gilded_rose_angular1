import angular from 'angular';
import template from './template.txt.html';

export default angular.module('gildedRose.homePage', []).
component('homePage', {
  template: template,
  controller: [() => ({
    tucola: 'yeah baby',
  })]
});
