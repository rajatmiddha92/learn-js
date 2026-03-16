const Vehicle = require('./Vehicle');
const VehicleType = require('../enums/VehicleType');

class Truck extends Vehicle {
  constructor(number) {
    super(number, VehicleType.TRUCK);
  }
}

module.exports = Truck;
