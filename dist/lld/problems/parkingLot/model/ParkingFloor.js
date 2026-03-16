export class ParkingFloor {
    constructor(id) {
        this.id = id;
        this.spots = new Map();
    }
    addSpot(spot) {
        this.spots.set(spot.id, spot);
    }
    findAvailableSpot(type) {
        for (const spot of this.spots.values()) {
            if (spot.allowedType === type && spot.tryOccupy()) {
                return spot;
            }
        }
        return null;
    }
}
