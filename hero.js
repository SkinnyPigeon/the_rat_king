var Hero = function( name, health, faveFood ) {
  this.name = name;
  this.health = health;
  this.faveFood = faveFood;
  this.speak = function() {
    return ( "AAARGHAGRHGHRHAGH I AM " + this.name.toUpperCase() )
  }
}





module.exports = Hero;