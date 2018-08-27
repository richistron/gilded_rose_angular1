import { factoryGenerator } from './gildedRose';

describe('factoryGenerator', () => {

  let factory;
  beforeEach(() => factory = factoryGenerator());

  it('should return an object with an items array', () => {
    expect(typeof factory.items).toEqual('object');
    expect(factory.items.length).toEqual(6);
  });

  it('should return an object with a foo prop', () => {
    expect(typeof factory.updateQuality).toEqual('function');
  });

  describe('updateQuality', () => {
    const testItems = [
      {
        position: 0,
        item: {name: "+5 Dexterity Vest", quality: 20, sell_in: 10},
        spec1: {quality: 19, sell_in: 9},
        spec2: {quality: 18, sell_in: 8},
      },
      {
        position: 1,
        item: {name: "Aged Brie", quality: 0, sell_in: 2},
        spec1: {quality: 1, sell_in: 1},
        spec2: {quality: 2, sell_in: 0},
      },
      {
        position: 2,
        item: {name: "Elixir of the Mongoose", quality: 7, sell_in: 5},
        spec1: {quality: 6, sell_in: 4},
        spec2: {quality: 5, sell_in: 3},
      },
      {
        position: 3,
        item: {name: "Sulfuras, Hand of Ragnaros", quality: 80, sell_in: 0},
        spec1: {quality: 80, sell_in: 0},
        spec2: {quality: 80, sell_in: 0},
      },
      {
        position: 4,
        item: {name: "Backstage passes to a TAFKAL80ETC concert", quality: 20, sell_in: 15},
        spec1: {quality: 21, sell_in: 14},
        spec2: {quality: 22, sell_in: 13},
      },
      {
        position: 5,
        item: {name: "Conjured Mana Cake", quality: 6, sell_in: 3},
        spec1: {quality: 5, sell_in: 2},
        spec2: {quality: 4, sell_in: 1},
      },
    ];

    for (const testItem of testItems) {

      const { position, spec1, spec2 } = testItem;

      it(testItem.item.name, () => {
        let items = factory.items;
        expect(items[position]).toEqual(testItem.item);
        items = factory.updateQuality(items);
        expect(items[position]).toEqual(Object.assign(testItem.item, {quality: spec1.quality, sell_in: spec1.sell_in}));
        items = factory.updateQuality(items);
        expect(items[position]).toEqual(Object.assign(testItem.item, {quality: spec2.quality, sell_in: spec2.sell_in}));
      });

    }
  });
});
