import { Vehicle } from './Vehicle';
import { VehicleType } from '../enums/VehicleType';
export class Car extends Vehicle {
    constructor(number) {
        super(number, VehicleType.CAR);
    }
}
