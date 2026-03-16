import { ParkingSpot } from './ParkingSpot';
import { VehicleType } from '../enums/VehicleType';

export class ParkingFloor {
  spots: Map<string, ParkingSpot> = new Map();

  constructor(public id: string) {}

  addSpot(spot: ParkingSpot) {
    this.spots.set(spot.id, spot);
  }

  findAvailableSpot(type: VehicleType): ParkingSpot | null {
    for (const spot of this.spots.values()) {
      if (spot.allowedType === type && spot.tryOccupy()) {
        return spot;
      }
    }

    return null;
  }
}
