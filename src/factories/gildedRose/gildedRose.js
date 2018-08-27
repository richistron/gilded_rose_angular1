import Item from './Item';
import updateQuality from './updateQuality';
import createFactory from '../../lib/createFactory';

export const factoryGenerator = () => {
  const items = [];
  items.push(Item('+5 Dexterity Vest', 10, 20));
  items.push(Item('Aged Brie', 2, 0));
  items.push(Item('Elixir of the Mongoose', 5, 7));
  items.push(Item('Sulfuras, Hand of Ragnaros', 0, 80));
  items.push(Item('Backstage passes to a TAFKAL80ETC concert', 15, 20));
  items.push(Item('Conjured Mana Cake', 3, 6));
  return {
    items,
    updateQuality: updateQuality(items),
  }
};

export default createFactory('gildedRoseFactory', {
  dependencies: [],
  controller: () => factoryGenerator(),
});
