import '../../main.scss'
import HomePage from '../homePage'
import getUrlName from '../../lib/getUrlName'
import template from './template.txt.html'
import createComponent from '../../lib/createComponent'

export default createComponent('layout', [HomePage], {
  bindings: {},
  template: template,
  dependencies: ['$location'],
  controller: function layoutComponentController ($location) {
    this.page = getUrlName($location.$$url)
  }
})
