import angular from 'angular';
import template from './template.txt.html';
import gildedRose from '../../factories/gildedRose';

export default angular.module('gildedRose.homePage', [
  gildedRose,
]).
component('homePage', {
  template: template,
  bindings: {
  },
  controller: ['gildedRoseFactory', function homePageController({updateQuality, items}) {
    this.items = items;

    this.handleClick = () => {
      this.items = updateQuality(this.items);
    }
  }],
}).name;
