// ENUMS
const DIRECTION = {
  UP: 'UP',
  DOWN: 'DOWN',
  IDLE: 'IDLE',
};

const REQUEST_TYPE = {
  PICKUP: 'PICKUP',
  DROP: 'DROP',
};

// ================== REQUEST ==================
class Request {
  constructor(floor, user, type) {
    this.floor = floor;
    this.user = user;
    this.type = type;
  }
}

// ================== PERSON ==================
class Person {
  constructor(name, weight) {
    this.name = name;
    this.weight = weight;
  }
}

// ================== FLOOR ==================
class Floor {
  constructor(no) {
    this.floorNo = no;
  }
}

// ================== ELEVATOR ==================
class Elevator {
  constructor(id, capacity) {
    this.id = id;
    this.capacity = capacity;
    this.currentFloor = 0;
    this.direction = DIRECTION.IDLE;

    this.currentLoad = 0;
    this.users = [];
    this.requests = [];

    this.isMoving = false;
  }

  addRequest(request) {
    this.requests.push(request);
  }

  processRequests() {
    if (this.isMoving) return;

    this.isMoving = true;

    const processNext = () => {
      if (this.requests.length === 0) {
        this.direction = DIRECTION.IDLE;
        this.isMoving = false;
        console.log(`Elevator ${this.id} is IDLE`);
        return;
      }

      const req = this.requests.shift();
      this.moveToFloor(req, processNext);
    };

    processNext();
  }

  moveToFloor(req, callback) {
    const { floor, user, type } = req;

    if (this.currentFloor !== floor) {
      this.direction = floor > this.currentFloor ? DIRECTION.UP : DIRECTION.DOWN;

      console.log(
        `Elevator ${this.id} moving ${this.direction} from ${this.currentFloor} to ${floor}`
      );
    } else {
      console.log(`Elevator ${this.id} already at floor ${floor}`);
    }

    setTimeout(() => {
      this.currentFloor = floor;

      if (type === REQUEST_TYPE.PICKUP) {
        if (this.currentLoad + user.weight <= this.capacity) {
          this.users.push(user);
          this.currentLoad += user.weight;
          console.log(`${user.name} ENTERED lift ${this.id}`);
        } else {
          console.log(`❌ Overweight! ${user.name} cannot enter`);
        }
      }

      if (type === REQUEST_TYPE.DROP) {
        this.users = this.users.filter((u) => u !== user);
        this.currentLoad -= user.weight;
        console.log(`${user.name} EXITED at floor ${floor}`);
      }

      callback();
    }, 500);
  }
}

// ================== BUILDING ==================
class Building {
  constructor() {
    this.floors = [];
    this.elevators = [];
  }

  addFloor(no) {
    this.floors.push(new Floor(no));
  }

  addElevator(id, capacity) {
    this.elevators.push(new Elevator(id, capacity));
  }

  isValidFloor(floor) {
    return this.floors.some((f) => f.floorNo === floor);
  }

  requestLift(user, from, to) {
    if (!this.isValidFloor(from) || !this.isValidFloor(to)) {
      console.log('Invalid floor');
      return;
    }

    const elevator = this.findBestElevator(from, to);

    if (!elevator) {
      console.log('No elevator available');
      return;
    }

    console.log(`Assigning Elevator ${elevator.id} to ${user.name} at floor ${from}`);

    // ✅ Proper request objects
    elevator.addRequest(new Request(from, user, REQUEST_TYPE.PICKUP));
    elevator.addRequest(new Request(to, user, REQUEST_TYPE.DROP));

    elevator.processRequests();
  }

  findBestElevator(from, to) {
    const direction = to > from ? DIRECTION.UP : DIRECTION.DOWN;

    let best = null;
    let minDist = Infinity;

    // same direction
    for (let lift of this.elevators) {
      if (
        lift.direction === direction &&
        ((direction === DIRECTION.UP && lift.currentFloor <= from) ||
          (direction === DIRECTION.DOWN && lift.currentFloor >= from))
      ) {
        let dist = Math.abs(lift.currentFloor - from);
        if (dist < minDist) {
          minDist = dist;
          best = lift;
        }
      }
    }

    // idle lifts
    if (!best) {
      for (let lift of this.elevators) {
        if (lift.direction === DIRECTION.IDLE) {
          let dist = Math.abs(lift.currentFloor - from);
          if (dist < minDist) {
            minDist = dist;
            best = lift;
          }
        }
      }
    }

    return best;
  }
}

// ================== TEST ==================
const building = new Building();

for (let i = 0; i <= 6; i++) {
  building.addFloor(i);
}

building.addElevator(1, 100);
building.addElevator(2, 200);

const p1 = new Person('Rajat', 40);
const p2 = new Person('Neelesh', 60);

building.requestLift(p1, 0, 5);
building.requestLift(p2, 2, 3);
