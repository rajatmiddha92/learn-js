const ParkingLot = require('../service/ParkingLot');
const Gate = require('./Gate');
const GateType = require('./../enums/GateType');

class ExitGate extends Gate {
  constructor(id) {
    super(id);
  }

  getType() {
    return GateType.EXIT;
  }

  unparkVehicle(ticketId, exitTime, paymentMode) {
    ParkingLot.getInstance().unparkVehicle(ticketId, exitTime, paymentMode);
  }
}

module.exports = ExitGate;
