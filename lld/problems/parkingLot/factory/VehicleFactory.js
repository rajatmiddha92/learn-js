const Car = require('../model/Car');
const Bike = require('../model/Bike');
const Truck = require('../model/Truck');
const VehicleType = require('../enums/VehicleType');

class VehicleFactory {
  static create(number, type) {
    switch (type) {
      case VehicleType.CAR:
        return new Car(number);

      case VehicleType.BIKE:
        return new Bike(number);

      case VehicleType.TRUCK:
        return new Truck(number);

      default:
        throw new Error('Invalid Vehicle Type');
    }
  }
}

module.exports = VehicleFactory;
