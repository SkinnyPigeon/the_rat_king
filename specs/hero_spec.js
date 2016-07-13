var Hero = require('../hero');
var Food = require('../food');

var assert = require('chai').assert;

describe( "Our Hero", function() {

  beforeEach( function() {
    jeff = new Hero( "Jeff", 100, "Chicken Drumsticks"  )
    chicken = new Food( "Chicken Drumsticks", 10 )
    toast = new Food( "Toast", 3 )
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

  it( "Hero's health should gain 3", function() {
    jeff.eat( toast );
    assert.equal( 103, jeff.health );
  })

  it( "Hero's health should gain 15", function() {
    jeff.eat( chicken );
    assert.equal( 115, jeff.health );
  })

})





