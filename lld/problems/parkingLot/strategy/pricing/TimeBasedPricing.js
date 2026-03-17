const PricingStrategy = require('./PricingStrategy');
const VehicleType = require('../../enums/VehicleType');

class TimeBasedPricing extends PricingStrategy {
  constructor() {
    super();

    // Simple baseline hourly rates. Can be tuned later.
    this.rates = {
      [VehicleType.CAR]: 20,
      [VehicleType.BIKE]: 10,
      [VehicleType.TRUCK]: 30,
    };
  }

  calculateFee(type, entry, exit) {
    const hours = Math.max(1, Math.ceil((exit.getTime() - entry.getTime()) / (1000 * 60 * 60)));
    return this.rates[type] * hours;
  }
}

module.exports = TimeBasedPricing;
