import angular from 'angular';
import createController from "./createController";

export default (name = '', deps = [], options = {}) => angular
  .module(`gildedRose.${ name }`, [
    ...deps,
  ])
  .component(name, {
    template: options.template,
    bindings: options.bindings,
    controller: createController({dependencies: options.dependencies, controller: options.controller}),
  })
  .name;
