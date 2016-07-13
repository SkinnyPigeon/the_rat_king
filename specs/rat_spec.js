var Rat = require('../rat');

var assert = require('chai').assert;


describe( "The Rat", function() {

  it( "Should exist", function() {
    var dave = new Rat( "dave", true );
    assert.equal( "dave", dave.name )
  })



} )