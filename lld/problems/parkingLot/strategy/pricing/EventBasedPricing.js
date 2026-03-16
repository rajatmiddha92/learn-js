const PricingStrategy = require('./PricingStrategy');
const VehicleType = require('../../enums/VehicleType');

class EventBasedPricing extends PricingStrategy {
  constructor() {
    super();

    this.rates = {
      [VehicleType.CAR]: 50,
      [VehicleType.BIKE]: 30,
      [VehicleType.TRUCK]: 70,
    };
  }

  calculateFee(type, entry, exit) {
    const hours = Math.ceil((exit.getTime() - entry.getTime()) / (1000 * 60 * 60));

    return this.rates[type] * hours;
  }
}

module.exports = EventBasedPricing;
