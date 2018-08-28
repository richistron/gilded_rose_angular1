import Item from './Item';
import updateQuality from './updateQuality';
import createFactory from '../../lib/createFactory';

const items = [];
items[Symbol.iterator] = function* () {
  yield Item('+5 Dexterity Vest', 10, 20);
  yield Item('Aged Brie', 2, 0);
  yield Item('Elixir of the Mongoose', 5, 7);
  yield Item('Sulfuras, Hand of Ragnaros', 0, 80);
  yield Item('Backstage passes to a TAFKAL80ETC concert', 15, 20);
  yield Item('Conjured Mana Cake', 3, 6);
};

const getItems = () => [...items];

export const factoryGenerator = (items = getItems(), _updateQuality = updateQuality) => {
  return {
    items: items,
    updateQuality: _updateQuality(items),
  };
};

export default createFactory('gildedRoseFactory', {
  dependencies: [],
  controller: () => factoryGenerator(),
});
