const PricingStrategy = require('./PricingStrategy');
const VehicleType = require('../../enums/VehicleType');

class TimeBasedPricing extends PricingStrategy {
  constructor() {
    super();
    this.PEAK_START = 8; // 08:00
    this.PEAK_END = 17; // 17:00
  }

  isPeak(hour) {
    return hour >= this.PEAK_START && hour <= this.PEAK_END;
  }

  calculateFee(type, entryTime, exitTime) {
    if (exitTime < entryTime) {
      throw new Error('Exit time before entry time');
    }

    const durationMs = exitTime - entryTime;
    const durationMinutes = durationMs / (1000 * 60);
    const totalHours = Math.ceil(durationMinutes / 60);

    let peakHours = 0;
    let nonPeakHours = 0;

    // Start from the beginning of the hour
    let cursor = new Date(entryTime);
    cursor.setMinutes(0, 0, 0);

    for (let i = 0; i < totalHours; i++) {
      const hour = cursor.getHours();

      if (this.isPeak(hour)) {
        peakHours++;
      } else {
        nonPeakHours++;
      }

      cursor.setHours(cursor.getHours() + 1);
    }

    let peakRate, nonPeakRate;

    switch (type) {
      case 'CAR':
        peakRate = 30.0;
        nonPeakRate = 20.0;
        break;
      case 'BIKE':
        peakRate = 15.0;
        nonPeakRate = 10.0;
        break;
      case 'TRUCK':
        peakRate = 50.0;
        nonPeakRate = 30.0;
        break;
      default:
        throw new Error('Invalid vehicle type');
    }

    return peakHours * peakRate + nonPeakHours * nonPeakRate;
  }
}

module.exports = TimeBasedPricing;
