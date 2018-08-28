import template from './template.txt.html'
import gildedRose from '../../factories/gildedRose'
import createComponent from '../../lib/createComponent'

export default createComponent('homePage', [gildedRose], {
  template: template,
  bindings: {},
  dependencies: ['gildedRoseFactory'],
  controller: function homePageController ({updateQuality, items}) {
    this.items = items
    this.updateQuality = updateQuality
  }
})
