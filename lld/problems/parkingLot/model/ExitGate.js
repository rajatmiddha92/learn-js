import ParkingLot from '../service/ParkingLot';
import Gate from './Gate';

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
