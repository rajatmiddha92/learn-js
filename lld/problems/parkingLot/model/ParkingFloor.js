class ParkingFloor {
  constructor(id) {
    this.id = id;
    this.spots = new Map();
  }

  addSpot(spot) {
    this.spots.set(spot.id, spot);
  }

  findAvailableSpot(type) {
    for (let spot of this.spots.values()) {
      if (spot.allowedType === type && spot.tryOccupy()) {
        return spot;
      }
    }

    return null;
  }
}

module.exports = ParkingFloor;
