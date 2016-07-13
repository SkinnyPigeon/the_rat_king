var Game = require('./game');
var Baddy = require('./baddy');
var Hero = require('./hero');
var Food = require('./food');
var Rat = require('./rat');

var game = new Game();
var ratKing = new Baddy( "Rat King", 100, "Chicken Drumsticks"  );
var steve = new Hero( "Steve", 100, "Chicken Drumsticks" );
var chicken = new Food( "Chicken Drumsticks", 10 );
var toast = new Food( "Toast", 3 );
var bob = new Rat( "bob", true );
var game.start( steve, ratKing );

