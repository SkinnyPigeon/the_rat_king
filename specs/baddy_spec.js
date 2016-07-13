var Baddy = require('../baddy');
var Food = require('../food');
var Rat = require('../rat');

var assert = require('chai').assert;

describe( "The Baddy", function() {

  beforeEach( function() {
    ratKing = new Baddy( "Rat King", 100, "Chicken Drumsticks"  )
    // steve = new Hero( "Steve", 100, "Pizza"  )
    chicken = new Food( "Chicken Drumsticks", 10 )
    toast = new Food( "Toast", 3 )
    bob = new Rat( "bob", true )

  })


  it( "Baddy has a name", function() {
    assert.equal( "Rat King", ratKing.name)
  })

  it( "Baddy should gain health when poisoned by chicken", function() {
    chicken.poisoning( bob )
    ratKing.eat( chicken )
    assert.equal( 115, ratKing.health )
  })

  it( "Baddy should lose health when not poisoned by toast", function() {
    ratKing.eat( toast )
    assert.equal( 97, ratKing.health )
  })

} )