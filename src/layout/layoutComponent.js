import angular from 'angular';
import template from './template.txt.html';
import HomePage from '../homePage';
import '../main.scss';

const allUrls = [
  ['/', 'home'],
  ['/not-found', '404']
];

const items = function* () {
  for (let url in allUrls) {
    yield allUrls[url];
  }
};

const createIterator = generator => {
  const iterator = {};
  iterator[Symbol.iterator] = generator;
  return iterator;
};

const urlsMap = createIterator(function* () {
  for (const item of items()) {
    yield item;
  }
});

const Urls = new Map(urlsMap);

const getUrlName = url => Urls.get(url) || '';

export default angular.module('gildedRose.layout', [
  HomePage
]).
component('layoutComponent', {
  template: template,
  // bindings: { page: '@' },
  controller: ['$location', function layoutComponentController($location) {
    this.page = getUrlName($location.$$url);
  }],
}).name;
