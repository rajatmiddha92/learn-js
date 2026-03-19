const PricingStrategyType = require('./../enums/PricingStrategyType');
const PricingStrategyFactory = require('../factory/PricingStrategyFactory');
const PaymentStrategyFactory = require('../factory/PaymentStrategyFactory');
const PaymentProcessor = require('./PaymentProcessor');
const { randomUUID } = require('crypto');
class ParkingLot {
  static instance = new ParkingLot();

  constructor() {
    if (ParkingLot.instance) {
      return ParkingLot.instance;
    }

    this.floors = new Map(); // Map<String, ParkingFloor>
    this.activeTickets = new Map(); // Map<String, Ticket>

    this.pricingStrategy = null;

    ParkingLot.instance = this;
  }

  static getInstance() {
    return ParkingLot.instance;
  }

  setPricingStrategy(strategy) {
    this.pricingStrategy = PricingStrategyFactory.get(strategy);
  }

  addFloor(floor) {
    this.floors.set(floor.id, floor);
  }

  // parkVehicle
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

    console.log('No spot available for vehicle type:', vehicle.type);
    return null;
  }

  // unparkVehicle
  unparkVehicle(ticketId, exitTime, paymentMode) {
    const ticket = this.activeTickets.get(ticketId);

    if (!ticket) {
      console.log('Invalid ticket ID.');
      return;
    }

    const fee = this.pricingStrategy.calculateFee(ticket.vehicle.type, ticket.entryTime, exitTime);

    const strategy = PaymentStrategyFactory.get(paymentMode);
    const processor = new PaymentProcessor(strategy);

    const paid = processor.pay(ticket, fee);

    if (!paid) {
      console.log('Vehicle cannot exit. Payment unsuccessful.');
      return;
    }

    const floor = this.floors.get(ticket.floorId);
    const spot = floor.spots.get(ticket.spotId);

    spot.vacate();
    this.activeTickets.delete(ticketId);

    console.log('Vehicle exited. Fee charged: ₹' + fee);
  }

  // printStatus
  printStatus() {
    for (let [floorId, floor] of this.floors.entries()) {
      for (let spot of floor.spots.values()) {
        console.log(
          ` Spot ${spot.id} [${spot.allowedType}] - ${spot.isOccupied() ? 'Occupied' : 'Free'}`
        );
      }
    }
  }
}

module.exports = ParkingLot;
