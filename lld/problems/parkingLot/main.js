const ParkingLot = require('./service/ParkingLot');
const ParkingFloor = require('./model/ParkingFloor');
const ParkingSpot = require('./model/ParkingSpot');
const VehicleFactory = require('./factory/VehicleFactory');
const VehicleType = require('./enums/VehicleType');

const lot = ParkingLot.getInstance();

const floor1 = new ParkingFloor('Floor1');

floor1.addSpot(new ParkingSpot('S1', VehicleType.BIKE));
floor1.addSpot(new ParkingSpot('S2', VehicleType.CAR));
floor1.addSpot(new ParkingSpot('S3', VehicleType.TRUCK));

lot.addFloor(floor1);

const bike = VehicleFactory.create('KA01AB1234', VehicleType.BIKE);

lot.parkVehicle(bike, new Date());
