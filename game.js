var Game = function() {
  this.players = [];
  this.start = function( hero, baddy ) {
    this.players.push( hero );
    this.players.push( baddy );
  };
  this.endTurn = function() {
    this.players.reverse();
  }
}

module.exports = Game;