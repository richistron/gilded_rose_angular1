import angular from 'angular';
import createController from './createController';

export default (name, options) => angular
  .module('gildedRose.' + name, [])
  .factory(name, createController( options )).name;
