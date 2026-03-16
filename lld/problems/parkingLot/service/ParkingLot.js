const { randomUUID } = require('crypto');

class ParkingLot {
  constructor() {
    if (ParkingLot.instance) {
      return ParkingLot.instance;
    }

    this.floors = new Map();
    this.activeTickets = new Map();

    ParkingLot.instance = this;
  }

  static getInstance() {
    if (!ParkingLot.instance) {
      ParkingLot.instance = new ParkingLot();
    }

    return ParkingLot.instance;
  }

  addFloor(floor) {
    this.floors.set(floor.id, floor);
  }

  parkVehicle(vehicle, entryTime) {
    for (let floor of this.floors.values()) {
      const spot = floor.findAvailableSpot(vehicle.type);

      if (spot) {
        const ticketId = randomUUID();

        const ticket = {
          ticketId,
          entryTime,
          vehicle,
          floorId: floor.id,
          spotId: spot.id,
        };

        this.activeTickets.set(ticketId, ticket);

        console.log('Vehicle parked. Ticket:', ticketId);

        return ticket;
      }
    }

    console.log('No spot available');
    return null;
  }
}

module.exports = ParkingLot;
