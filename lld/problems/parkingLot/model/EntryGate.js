const ParkingLot = require('../service/ParkingLot');
const Gate = require('./Gate');

class EntryGate extends Gate {
  constructor(id) {
    super(id);
  }

  getType() {
    return GateType.ENTRY;
  }

  parkVehicle(vehicle, entryTime) {
    return ParkingLot.getInstance().parkVehicle(vehicle, entryTime);
  }
}

module.exports = EntryGate;
