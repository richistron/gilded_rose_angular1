import angular from 'angular';
import Item from './Item';
import updateQuality from "./updateQuality";

const createGildedRoseFactory = ( items = [] ) => () => {
  items.push(new Item('+5 Dexterity Vest', 10, 20));
  items.push(new Item('Aged Brie', 2, 0));
  items.push(new Item('Elixir of the Mongoose', 5, 7));
  items.push(new Item('Sulfuras, Hand of Ragnaros', 0, 80));
  items.push(new Item('Backstage passes to a TAFKAL80ETC concert', 15, 20));
  items.push(new Item('Conjured Mana Cake', 3, 6));

  return {
    items,
    updateQuality,
  };
};

export default angular
  .module('gildedRose.gildedRoseFactory', [])
  .factory('gildedRoseFactory', [createGildedRoseFactory()]).name;
