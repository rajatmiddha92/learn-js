class ParkingSpot {
  constructor(id, allowedType) {
    this.id = id;
    this.allowedType = allowedType;
    this.occupied = false;
  }

  tryOccupy() {
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

module.exports = ParkingSpot;
