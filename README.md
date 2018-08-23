# Gilded Rose Kata Angular 1

This is a very well known kata, and seeing this issue in a modern app might
lead to do some refactor because you will see with more clarity what is the
problem behind this kata. Seat back, relax and enjoy ;)

# Gilded Rose kata by Sandy Metz (OOP)

<a href="http://www.youtube.com/watch?feature=player_embedded&v=8bZh5LMaSmE
" target="_blank"><img src="http://img.youtube.com/vi/8bZh5LMaSmE/0.jpg" 
alt="Gilded Rose kata" width="240" height="180" border="10" /></a>

https://youtu.be/8bZh5LMaSmE

## The algorithm

```javascript
function updateQuality() {
  const items = _items;
  for (var i = 0; i < items.length; i++) {
    if (items[i].name != 'Aged Brie' && items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
      if (items[i].quality > 0) {
        if (items[i].name != 'Sulfuras, Hand of Ragnaros') {
          items[i].quality = items[i].quality - 1
        }
      }
    } else {
      if (items[i].quality < 50) {
        items[i].quality = items[i].quality + 1
        if (items[i].name == 'Backstage passes to a TAFKAL80ETC concert') {
          if (items[i].sell_in < 11) {
            if (items[i].quality < 50) {
              items[i].quality = items[i].quality + 1
            }
          }
          if (items[i].sell_in < 6) {
            if (items[i].quality < 50) {
              items[i].quality = items[i].quality + 1
            }
          }
        }
      }
    }
    if (items[i].name != 'Sulfuras, Hand of Ragnaros') {
      items[i].sell_in = items[i].sell_in - 1;
    }
    if (items[i].sell_in < 0) {
      if (items[i].name != 'Aged Brie') {
        if (items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
          if (items[i].quality > 0) {
            if (items[i].name != 'Sulfuras, Hand of Ragnaros') {
              items[i].quality = items[i].quality - 1
            }
          }
        } else {
          items[i].quality = items[i].quality - items[i].quality
        }
      } else {
        if (items[i].quality < 50) {
          items[i].quality = items[i].quality + 1
        }
      }
    }
  }
}
``` 

# Dependencies

```
- node v9.11.*
- yarn
```

## Installation

```
git clone git@github.com:richistron/gilded_rose_angular1.git

cd gilded_rose_angular1

yarn install;
```

## Package.json

```
yarn dev # webpack-dev-server
yarn webpack # compile production
yarn dist:server # dist server 3000
```
