import { Ticket } from '../model/Ticket';
import { v4 as uuid } from 'uuid';
export class ParkingLot {
    constructor() {
        this.floors = new Map();
        this.activeTickets = new Map();
        this.some = [];
    }
    static getInstance() {
        console.log(this, 'ehis');
        return this.instance;
    }
    addFloor(floor) {
        this.floors.set(floor.id, floor);
    }
    parkVehicle(vehicle, entryTime) {
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
ParkingLot.instance = new ParkingLot();
