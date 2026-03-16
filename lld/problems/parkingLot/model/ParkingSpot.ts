import { VehicleType } from '../enums/VehicleType';

export class ParkingSpot {
  private occupied: boolean = false;

  constructor(
    public id: string,
    public allowedType: VehicleType
  ) {}

  tryOccupy(): boolean {
    if (!this.occupied) {
      this.occupied = true;
      return true;
    }

    return false;
  }

  vacate() {
    this.occupied = false;
  }

  isOccupied() {
    return this.occupied;
  }
}
