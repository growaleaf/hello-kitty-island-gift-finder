// Source: pcgamer.com Hello Kitty Island Adventure gifts guide, published 2025-01-31,
// re-confirmed by fetch on 2026-11-23. Single source; may predate later game patches.
var HKIA_GIFTS = [
  {"character": "Hello Kitty", "threeStar": ["Red bow apple pie"], "twoStar": ["Mama's Apple Pie", "Strawberry Shortcake", "Candied Banana Coffee", "Beignets with Pineapple Dip", "Strawberry Cheesecake", "Fruity Cheesecake", "Fruit Tart"], "oneStar": ["Any fruit", "Any baked good", "Any gift box"]},
  {"character": "My Melody", "threeStar": ["Pink Clouds Ice Cream"], "twoStar": ["Pink Latte", "Strawberry Almond Galette", "Pink Cloud", "Almond Pound Cake", "Sweet Dreams Stories", "Sprinkles Shaker"], "oneStar": ["Candy Cloud", "Strawberry", "Strawberry Shortcake", "Sakura Cake", "Swampmallow", "Sweet Pudding", "Boulder Bits Ice Cream", "Strawberry Shake", "Sweet Frappe", "Sweet Latte", "Sweet Soda", "Macaron", "Sugarkelp Cakes", "Pastry", "Strawberry Cheesecake", "Cinnamon Roll", "Beignets with Pineapple Dip", "Sunshine Snuggles", "Sweet Crepe", "Sweet Custard Tart"]},
  {"character": "Pochacco", "threeStar": ["Pochacco Energy Pop"], "twoStar": ["Everything Pizza", "Veggie Crepe"], "oneStar": ["Tofu", "Spinip", "Veggie Bread", "Veggie Pizza"]},
  {"character": "Tuxedo Sam", "threeStar": ["Designer Island Doll"], "twoStar": ["Tropical Gift", "Tropical Material", "Beignets with Pineapple Dip"], "oneStar": ["Any Tropical Critter", "Any Tropical Food", "Any Gift Box", "Any Material", "Fabric"]},
  {"character": "Keroppi", "threeStar": ["Critter Totem"], "twoStar": ["Any Swamp Critter", "Swampy Souvenir Doll", "Swampy Lamb Plush"], "oneStar": ["Any Critter", "Any Souvenir Doll", "Lotus Blossom", "Wood Block", "Swampy Soda", "Swampy Gift", "Swampy Material", "Swampy Hologram", "Swampy Star"]},
  {"character": "Kuromi", "threeStar": ["Pumpkin Spice Soda"], "twoStar": ["Jack-o-Lantern", "Spicy Pumpkin Latte", "Spooky Cake"], "oneStar": ["Pumpkin", "Pumpkin Pie", "Pumpkin Pudding", "Pumpkin Cheesecake", "Fall Cloud", "Any Soda"]},
  {"character": "Pompompurin", "threeStar": ["Mama's Pudding"], "twoStar": ["Pudding", "Cheese Ice Cream"], "oneStar": ["Any dessert", "Calming Crystal", "Hot Cocoa", "Mountain Soundtrack", "Alfredo Pizza", "Cappuccino", "Coral Milk", "Spinip", "Alfredo Pizza", "Milk Bread. Cream Soda", "Confusing Coffee"]},
  {"character": "Pekkle", "threeStar": ["Mountain Soundtrack"], "twoStar": ["Rocky Music Box", "Stacked Stones"], "oneStar": ["Any Mountain Critter", "Any Music Box", "Any Rocky item", "Calming Crystal", "Hot Cocoa", "Mama's Pudding", "Volcanic Guitar", "Sounds of Steel", "Volcano Soundtrack", "Microphone"]},
  {"character": "Hangyodon", "threeStar": ["Mermaid Figure"], "twoStar": ["Aquatic Material", "Amethyst Snipe", "Briney Clamfish", "Electric Tang", "Galaxy Grouper", "Halfmoon Herring", "Kelpfin", "Masked Wrassler", "Opal Flutterfin", "Royal Lance", "Ruby Dreamscale", "Sailing Charmfish", "Sandy Puffler", "Sunset Guppy"], "oneStar": ["Any fish", "Any material", "Aquatic Hologram"]},
  {"character": "Retsuko", "threeStar": ["Volcanic Guitar"], "twoStar": ["Volcano Soundtrack", "Sounds of Steel", "Microphone"], "oneStar": ["Any ingot", "Any music box", "Toasty pizza", "Toasted Almond", "Magma Bloom", "Pineapple Lava Soda"]},
  {"character": "Chococat", "threeStar": ["Interactive History of Chocolate"], "twoStar": ["Ancient Inventions"], "oneStar": ["Any book", "Chocolate Coins", "Chocolate Banana Pudding"]},
  {"character": "Cinnamoroll", "threeStar": ["Chocolate Chai Latte"], "twoStar": ["Mocha", "Chai", "Hot Cocoa", "Espresso", "Molten Frappe", "Spicy Pumpkin Cake", "Volcano Cake"], "oneStar": ["Chocolate Coin", "Spicy Pizza", "Cinnamon Bread", "Chocolate Balls", "Pineapple Lava Sofa", "Any coffee drink"]},
  {"character": "Bad Badtz-Maru", "threeStar": ["Ultimate Joke Pizza"], "twoStar": ["Pineapple Pizza"], "oneStar": ["Any Tropical Critter", "Any Tropical Food", "Any Fish", "Pineapple", "Water Balloon", "Joke Pizza", "Surprising Soda", "Coconut", "Any Tropical Item", "Pineapple Stack Cake", "Beignets with Pineapple Dip", "Banana Ice Cream", "Chocolate Pineapple Pudding", "Pineapple Lava Soda", "Banana Soda", "Hibiscus", "Hibiscus Candle", "Tall Hibiscus Candle"]}
];

function hkiaSearchItem(query) {
  var q = (query || "").trim().toLowerCase();
  if (!q) return [];
  var results = [];
  HKIA_GIFTS.forEach(function (c) {
    ["threeStar", "twoStar", "oneStar"].forEach(function (tier) {
      c[tier].forEach(function (item) {
        if (item.toLowerCase().indexOf(q) !== -1) {
          results.push({
            character: c.character,
            item: item,
            tier: tier === "threeStar" ? 3 : tier === "twoStar" ? 2 : 1,
          });
        }
      });
    });
  });
  results.sort(function (a, b) { return b.tier - a.tier; });
  return results;
}

function hkiaGetCharacter(name) {
  var n = (name || "").trim().toLowerCase();
  for (var i = 0; i < HKIA_GIFTS.length; i++) {
    if (HKIA_GIFTS[i].character.toLowerCase() === n) return HKIA_GIFTS[i];
  }
  return null;
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = { HKIA_GIFTS: HKIA_GIFTS, hkiaSearchItem: hkiaSearchItem, hkiaGetCharacter: hkiaGetCharacter };
}
