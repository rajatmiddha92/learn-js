import { Vehicle } from './Vehicle';
import { VehicleType } from '../enums/VehicleType';
export class Bike extends Vehicle {
    constructor(number) {
        super(number, VehicleType.BIKE);
    }
}
