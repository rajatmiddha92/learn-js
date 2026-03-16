import { VehicleType } from '../enums/VehicleType';

export abstract class Vehicle {
  constructor(
    public number: string,
    public type: VehicleType
  ) {}
}
