import { ParkingFloor } from '../model/ParkingFloor';
import { Ticket } from '../model/Ticket';
import { Vehicle } from '../model/Vehicle';
import { PricingStrategy } from '../strategy/pricing/PricingStrategy';
import { v4 as uuid } from 'uuid';

export class ParkingLot {
  private static instance = new ParkingLot();

  floors: Map<string, ParkingFloor> = new Map();
  activeTickets: Map<string, Ticket> = new Map();

  pricingStrategy!: PricingStrategy;

  private constructor() {}

  static getInstance() {
    return this.instance;
  }

  addFloor(floor: ParkingFloor) {
    this.floors.set(floor.id, floor);
  }

  parkVehicle(vehicle: Vehicle, entryTime: Date): Ticket | null {
    for (const floor of this.floors.values()) {
      const spot = floor.findAvailableSpot(vehicle.type);

      if (spot) {
        const ticket = new Ticket(uuid(), entryTime, vehicle, floor.id, spot.id);

        this.activeTickets.set(ticket.ticketId, ticket);

        console.log('Vehicle parked', ticket.ticketId);

        return ticket;
      }
    }

    console.log('No spot available');

    return null;
  }
}
