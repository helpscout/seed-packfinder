// Test :: Find
var assert = require('chai').assert;
var packfinder = require('../index');

var packs = packfinder.find();

describe('packfinder: find', function() {
  it('should automatically include seed packs (from package.json)', function() {
    assert.equal(packs.length, 2);
    assert.equal(packs[1], 'seed-breakpoints');
  });

  it('should automatically include @seedcss/seed packs (from package.json)', function() {
    assert.equal(packs.length, 2);
    assert.equal(packs[0], '@seedcss/seed-color-scheme');
  });
});
