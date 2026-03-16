import { VehicleType } from '../enums/VehicleType';
import { Car } from '../model/Car';
import { Bike } from '../model/Bike';
import { Truck } from '../model/Truck';
export class VehicleFactory {
    static create(number, type) {
        switch (type) {
            case VehicleType.CAR:
                return new Car(number);
            case VehicleType.BIKE:
                return new Bike(number);
            case VehicleType.TRUCK:
                return new Truck(number);
            default:
                throw new Error('Invalid vehicle type');
        }
    }
}
