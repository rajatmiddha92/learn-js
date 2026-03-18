const ParkingLot = require('./service/ParkingLot');
const ParkingFloor = require('./model/ParkingFloor');
const ParkingSpot = require('./model/ParkingSpot');
const VehicleFactory = require('./factory/VehicleFactory');
const VehicleType = require('./enums/VehicleType');
const PaymentMode = require('./enums/PaymentMode');
const EntryGate = require('./model/EntryGate');
const ExitGate = require('./model/ExitGate');
const PricingStrategyType = require('./enums/PricingStrategyType');

const lot = ParkingLot.getInstance();
const entryGate = new EntryGate('EG1');
const exitGate = new ExitGate('XG1');

lot.setPricingStrategy(PricingStrategyType.TIME_BASED);

const floor1 = new ParkingFloor('Floor1');

floor1.addSpot(new ParkingSpot('S1', VehicleType.BIKE));
new ParkingSpot('S2', VehicleType.CAR);
new ParkingSpot('S3', VehicleType.TRUCK);

lot.addFloor(floor1);

const bike = VehicleFactory.create('KA01AB1234', VehicleType.BIKE);
const entryTime = new Date();
const ticket = entryGate.parkVehicle(bike, entryTime);

lot.printStatus();

const exitTime = new Date();
exitGate.unparkVehicle(ticket.ticketId, exitTime, PaymentMode.UPI);

// lot.printStatus();
