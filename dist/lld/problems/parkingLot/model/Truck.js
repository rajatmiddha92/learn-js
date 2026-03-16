import { Vehicle } from './Vehicle';
import { VehicleType } from '../enums/VehicleType';
export class Truck extends Vehicle {
    constructor(number) {
        super(number, VehicleType.TRUCK);
    }
}
