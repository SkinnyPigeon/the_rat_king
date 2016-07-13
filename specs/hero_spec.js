var Hero = require('../hero');
var assert = require('chai').assert;

describe( "Our Hero", function() {

  beforeEach( function() {
    jeff = new Hero( "Jeff", 100, "Chicken Drumsticks"  )
  })


  it( "Hero has a name", function() {
    assert.equal( "Jeff", jeff.name)
  })

  it( "Hero has health", function() {
    assert.equal( 100, jeff.health )
  })

  it( "Hero has favourite food", function() {
    assert.equal( "Chicken Drumsticks", jeff.faveFood )
  })

  it( "Hero can say name", function() {
    assert.equal( "AAARGHAGRHGHRHAGH I AM JEFF", jeff.speak() )
  })


})