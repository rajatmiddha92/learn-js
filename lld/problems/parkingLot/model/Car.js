const Vehicle = require('./Vehicle');
const VehicleType = require('../enums/VehicleType');

class Car extends Vehicle {
  constructor(number) {
    super(number, VehicleType.CAR);
  }
}

module.exports = Car;
