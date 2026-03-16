import { VehicleType } from '../../enums/VehicleType';

export interface PricingStrategy {
  calculateFee(type: VehicleType, entryTime: Date, exitTime: Date): number;
}
