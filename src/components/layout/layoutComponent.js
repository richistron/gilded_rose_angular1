// import '../../main.scss';
import HomePage from '../homePage';
import angular from 'angular';
import getUrlName from '../../lib/getUrlName';
import template from './template.txt.html';

export default angular
  .module('gildedRose.layout', [
    HomePage
  ])
  .component('layoutComponent', {
    template: template,
    controller: ['$location', function layoutComponentController($location) {
      this.page = getUrlName($location.$$url);
    }],
  })
  .name;
