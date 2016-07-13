var Food = function( name, heal ) {
  this.name = name;
  this.heal = heal;
  this.taint = false;
  this.poisoning = function( rat ) {
    if( rat.diseased === true ){
      this.taint = true
    }
  }
}

module.exports = Food;