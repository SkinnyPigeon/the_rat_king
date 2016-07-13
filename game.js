var Game = function() {
  this.players = [];
  this.start = function( hero, baddy ) {
    this.players.push( hero );
    this.players.push( baddy );
  };
  this.endTurn = function() {
    this.players.reverse();
  };
  this.won = function() {
    return this.players[1].health <= 0
  }
}

module.exports = Game;