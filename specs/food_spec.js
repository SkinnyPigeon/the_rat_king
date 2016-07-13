var Food = require('../food');
var assert = require('chai').assert;

describe( "Our Food", function() {

  beforeEach( function() {
    chicken = new Food( "Chicken Drumsticks", 10 )
    toast = new Food( "Toast", 3 )
  })

  it( "Should have a name", function() {
    assert.equal( "Toast", toast.name )
  })

  it( "Should heal", function() {
    assert.equal( 10, chicken.heal )
  })

} )