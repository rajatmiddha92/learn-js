import ParkingLot from '../service/ParkingLot';
import Gate from './Gate';

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
