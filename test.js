var assert = require("assert");
var data = require("./data.js");
var HKIA_GIFTS = data.HKIA_GIFTS;
var hkiaSearchItem = data.hkiaSearchItem;
var hkiaGetCharacter = data.hkiaGetCharacter;

var passed = 0;
function test(name, fn) {
  fn();
  passed++;
  console.log("PASS: " + name);
}

test("has exactly 13 characters", function () {
  assert.strictEqual(HKIA_GIFTS.length, 13);
});

test("Hello Kitty 3-star includes Red bow apple pie", function () {
  var hk = hkiaGetCharacter("Hello Kitty");
  assert.ok(hk);
  assert.ok(hk.threeStar.indexOf("Red bow apple pie") !== -1);
});

test("Bad Badtz-Maru is present with Ultimate Joke Pizza as 3-star", function () {
  var c = hkiaGetCharacter("Bad Badtz-Maru");
  assert.ok(c);
  assert.deepStrictEqual(c.threeStar, ["Ultimate Joke Pizza"]);
});

test("Chococat is present with Interactive History of Chocolate as 3-star", function () {
  var c = hkiaGetCharacter("Chococat");
  assert.ok(c);
  assert.deepStrictEqual(c.threeStar, ["Interactive History of Chocolate"]);
});

test("hkiaGetCharacter is case-insensitive", function () {
  var c = hkiaGetCharacter("kuromi");
  assert.ok(c);
  assert.strictEqual(c.character, "Kuromi");
});

test("hkiaGetCharacter returns null for unknown character", function () {
  assert.strictEqual(hkiaGetCharacter("Nonexistent Character"), null);
});

test("searching 'pineapple' matches Bad Badtz-Maru's 1-star Pineapple", function () {
  var results = hkiaSearchItem("pineapple");
  var match = results.filter(function (r) {
    return r.character === "Bad Badtz-Maru" && r.item === "Pineapple";
  });
  assert.strictEqual(match.length, 1);
  assert.strictEqual(match[0].tier, 1);
});

test("searching matches 'Any fruit' category entry for Hello Kitty", function () {
  var results = hkiaSearchItem("fruit");
  var match = results.filter(function (r) {
    return r.character === "Hello Kitty" && r.item === "Any fruit";
  });
  assert.strictEqual(match.length, 1);
  assert.strictEqual(match[0].tier, 1);
});

test("empty query returns no results", function () {
  assert.deepStrictEqual(hkiaSearchItem(""), []);
  assert.deepStrictEqual(hkiaSearchItem("   "), []);
});

test("results are sorted highest tier first", function () {
  var results = hkiaSearchItem("pizza");
  for (var i = 1; i < results.length; i++) {
    assert.ok(results[i - 1].tier >= results[i].tier);
  }
});

test("'mama's pudding' 3-star search resolves to Pompompurin", function () {
  var results = hkiaSearchItem("mama's pudding");
  var match = results.filter(function (r) { return r.character === "Pompompurin"; });
  assert.strictEqual(match.length, 1);
  assert.strictEqual(match[0].tier, 3);
});

console.log(passed + " tests passed");
