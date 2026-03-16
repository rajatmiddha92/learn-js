import { Vehicle } from './Vehicle';
import { VehicleType } from '../enums/VehicleType';

export class Bike extends Vehicle {
  constructor(number: string) {
    super(number, VehicleType.BIKE);
  }
}
