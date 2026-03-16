const Vehicle = require('./Vehicle');
const VehicleType = require('../enums/VehicleType');

class Bike extends Vehicle {
  constructor(number) {
    super(number, VehicleType.BIKE);
  }
}

module.exports = Bike;
