var Game = require('../game');
var Baddy = require('../baddy');
var Hero = require('../hero');
var Food = require('../food');
var Rat = require('../rat');

var assert = require('chai').assert;

describe( "The Baddy", function() {

  beforeEach( function() {
    game = new Game();

    ratKing = new Baddy( "Rat King", 100, "Chicken Drumsticks"  );
    dangerousMouse = new Baddy( "Dangereous Mouse", 75, "Pizza"  );

    steve = new Hero( "Steve", 100, "Chicken Drumsticks" );

    chicken = new Food( "Chicken Drumsticks", 10 );
    toast = new Food( "Toast", 3 );

    bob = new Rat( "bob", true );

  })

  it( "Should have players in players array", function() {
    game.start( steve, ratKing );
    assert.equal( 2, game.players.length )
  })

  it( "Should change players between rounds", function() {
    game.start( steve, ratKing );
    game.endTurn();
    assert.deepEqual( "Rat King", game.players[0].name )
  })


} )
















