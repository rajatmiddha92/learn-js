import { PricingStrategy } from './PricingStrategy';
import { VehicleType } from '../../enums/VehicleType';

export class EventBasedPricing implements PricingStrategy {
  rates = {
    [VehicleType.CAR]: 50,
    [VehicleType.BIKE]: 30,
    [VehicleType.TRUCK]: 70,
  };

  calculateFee(type: VehicleType, entry: Date, exit: Date): number {
    const hours = Math.ceil((exit.getTime() - entry.getTime()) / (1000 * 60 * 60));

    return this.rates[type] * hours;
  }
}
