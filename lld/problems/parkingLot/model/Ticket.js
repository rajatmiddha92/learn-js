const PaymentStatus = require('../enums/PaymentStatus');

class Ticket {
  constructor(ticketId, entryTime, vehicle, floorId, spotId) {
    this.ticketId = ticketId;
    this.entryTime = entryTime;
    this.vehicle = vehicle;
    this.floorId = floorId;
    this.spotId = spotId;
    this.paymentStatus = PaymentStatus.PENDING;
  }
}

module.exports = Ticket;
