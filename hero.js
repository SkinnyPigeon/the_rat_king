var Hero = function( name, health, faveFood ) {
  this.name = name;
  this.health = health;
  this.faveFood = faveFood;
  this.damage = 0;
  this.speak = function() {
    return ( "AAARGHAGRHGHRHAGH I AM " + this.name.toUpperCase() )
  };
  this.eat = function( food ) {
    if( food.name === this.faveFood ){
      return this.health += (food.heal * 1.5 )
    } else {
      return this.health += food.heal
    }
  };
  this.swipe = function() {
    var number = Math.floor(Math.random() * (17 - 11) + 11);
    this.damage = number;
  };
  this.special = function() {
    if( this.health >= 50 ) {
      this.damage = 24;
    }
  }
}





module.exports = Hero;