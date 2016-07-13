var Hero = function( name, health, faveFood ) {
  this.name = name;
  this.health = health;
  this.faveFood = faveFood;
  this.speak = function() {
    return ( "AAARGHAGRHGHRHAGH I AM " + this.name.toUpperCase() )
  };
  this.eat = function( food ){
    if( food.name === this.faveFood ){
      return this.health += (food.heal * 1.5 )
    } else {
      return this.health += food.heal
    }
  }
}





module.exports = Hero;