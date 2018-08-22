import angular from 'angular';
import template from './template.txt.html';
import HomePage from '../homePage';
import '../main.scss';

export default angular.module('gildedRose.layout', [HomePage.name]).
component('layoutComponent', {
  template: template,
  bindings: { page: '@' },
  controller: [function layoutComponentController() {
    this.page = this.page || '404';
  }],
});
