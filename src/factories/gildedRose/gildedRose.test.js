import { factoryGenerator } from './gildedRose';
import Item from './Item';

describe('factoryGenerator', () => {

  it('should return an object with an items array', () => {
    expect(typeof factoryGenerator().items).toEqual('object');
  });

  it('should return an object with a foo prop', () => {
    expect(typeof factoryGenerator().updateQuality).toEqual('function');
  });

  describe('updateQuality', () => {
    it('+5 Dexterity Vest', () => {
      const factory = factoryGenerator([Item('+5 Dexterity Vest', 10, 20)]);
      expect(factory.items.length).toBe(1);
      expect(factory.items[0].quality).toBe(20);
      expect(factory.items[0].sell_in).toBe(10);
      factory.updateQuality();
      expect(factory.items[0].quality).toBe(19);
      expect(factory.items[0].sell_in).toBe(9);
    });

    it('Aged Brie', () => {
      const factory = factoryGenerator([Item('Aged Brie', 2, 0)]);
      expect(factory.items.length).toBe(1);
      expect(factory.items[0].quality).toBe(0);
      expect(factory.items[0].sell_in).toBe(2);
      factory.updateQuality();
      expect(factory.items[0].quality).toBe(1);
      expect(factory.items[0].sell_in).toBe(1);
    });

    it('Elixir of the Mongoose', () => {
      const factory = factoryGenerator([Item('Elixir of the Mongoose', 5, 7)]);
      expect(factory.items.length).toBe(1);
      expect(factory.items[0].quality).toBe(7);
      expect(factory.items[0].sell_in).toBe(5);
      factory.updateQuality();
      expect(factory.items[0].quality).toBe(6);
      expect(factory.items[0].sell_in).toBe(4);
    });

    it('Sulfuras, Hand of Ragnaros', () => {
      const factory = factoryGenerator([Item('Sulfuras, Hand of Ragnaros', 0, 80)]);
      expect(factory.items.length).toBe(1);
      expect(factory.items[0].quality).toBe(80);
      expect(factory.items[0].sell_in).toBe(0);
      factory.updateQuality();
      expect(factory.items[0].quality).toBe(80);
      expect(factory.items[0].sell_in).toBe(0);
    });

    it('Backstage passes to a TAFKAL80ETC concert', () => {
      const factory = factoryGenerator([Item('Backstage passes to a TAFKAL80ETC concert', 15, 20)]);
      expect(factory.items.length).toBe(1);
      expect(factory.items[0].quality).toBe(20);
      expect(factory.items[0].sell_in).toBe(15);
      factory.updateQuality();
      expect(factory.items[0].quality).toBe(21);
      expect(factory.items[0].sell_in).toBe(14);
    });

    it('Conjured Mana Cake', () => {
      const factory = factoryGenerator([Item('Conjured Mana Cake', 3, 6)]);
      expect(factory.items.length).toBe(1);
      expect(factory.items[0].quality).toBe(6);
      expect(factory.items[0].sell_in).toBe(3);
      factory.updateQuality();
      expect(factory.items[0].quality).toBe(5);
      expect(factory.items[0].sell_in).toBe(2);
    });
  });
});
