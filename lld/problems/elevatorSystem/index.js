// ENUM for direction
const DIRECTION = {
  UP: 'UP',
  DOWN: 'DOWN',
  IDLE: 'IDLE',
};

class Building {
  constructor() {
    this.floors = [];
    this.lifts = [];
  }

  addFloor(floorNo) {
    this.floors.push(new Floor(floorNo));
  }

  addLift(no, capacity) {
    this.lifts.push(new Elevator(no, capacity));
  }

  isValidFloor(floorNo) {
    return this.floors.some((f) => f.floorNo === floorNo);
  }

  // 🎯 MAIN METHOD (instead of useLift)
  requestLift(user, fromFloor, toFloor) {
    if (!this.isValidFloor(fromFloor) || !this.isValidFloor(toFloor)) {
      console.log('Invalid floor');
      return;
    }

    const elevator = this.findBestElevator(fromFloor);

    if (!elevator) {
      console.log('No elevator available');
      return;
    }

    console.log(`Assigning Elevator ${elevator.eleNo} to ${user.name} at floor ${fromFloor}`);

    elevator.addRequest(fromFloor, user);
    elevator.addRequest(toFloor, user);
    elevator.processRequests();
  }

  // 🧠 SIMPLE STRATEGY (Nearest Elevator)
  findBestElevator(fromFloor, toFloor) {
    const direction = toFloor > fromFloor ? DIRECTION.UP : DIRECTION.DOWN;

    let best = null;
    let minDistance = Infinity;

    // ✅ 1. Same direction + on the way
    for (let lift of this.lifts) {
      if (
        lift.direction === direction &&
        ((direction === DIRECTION.UP && lift.currentFloor <= fromFloor) ||
          (direction === DIRECTION.DOWN && lift.currentFloor >= fromFloor))
      ) {
        let dist = Math.abs(lift.currentFloor - fromFloor);
        if (dist < minDistance) {
          minDistance = dist;
          best = lift;
        }
      }
    }

    // ✅ 2. Idle elevators
    if (!best) {
      for (let lift of this.lifts) {
        if (lift.direction === DIRECTION.IDLE) {
          let dist = Math.abs(lift.currentFloor - fromFloor);
          if (dist < minDistance) {
            minDistance = dist;
            best = lift;
          }
        }
      }
    }

    // ✅ 3. Fallback (least distance)
    if (!best) {
      for (let lift of this.lifts) {
        let dist = Math.abs(lift.currentFloor - fromFloor);
        if (dist < minDistance) {
          minDistance = dist;
          best = lift;
        }
      }
    }

    return best;
  }
}

class Floor {
  constructor(number) {
    this.floorNo = number;
  }
}

class Elevator {
  constructor(no, capacity) {
    this.eleNo = no;
    this.capacity = capacity;
    this.currCapacity = 0;
    this.currentFloor = 0;
    this.direction = DIRECTION.IDLE;
    this.requests = []; // queue
    this.users = [];
    this.isMoving = false;
  }

  addRequest(floorNo, user) {
    this.requests.push({ floorNo, user });
  }

  processRequests() {
    if (this.isMoving) return;

    this.isMoving = true;

    const processNext = () => {
      if (this.requests.length === 0) {
        this.direction = DIRECTION.IDLE;
        this.isMoving = false;
        console.log(`Elevator ${this.eleNo} is now IDLE`);
        return;
      }

      const { floorNo, user } = this.requests.shift();

      this.moveToFloor(floorNo, user, processNext);
    };

    processNext();
  }

  moveToFloor(targetFloor, user, callback) {
    if (this.currentFloor === targetFloor) {
      console.log(`Elevator ${this.eleNo} already at floor ${targetFloor}`);
      callback();
      return;
    }

    this.direction = targetFloor > this.currentFloor ? DIRECTION.UP : DIRECTION.DOWN;

    console.log(
      `Elevator ${this.eleNo} moving ${this.direction} from ${this.currentFloor} to ${targetFloor}`
    );

    setTimeout(() => {
      this.currentFloor = targetFloor;

      // 🧠 Capacity check when picking user
      if (!this.users.includes(user)) {
        if (this.currCapacity + user.weight <= this.capacity) {
          this.users.push(user);
          this.currCapacity += user.weight;
          console.log(`${user.name} entered lift ${this.eleNo}`);
        } else {
          console.log('Overweight! Cannot enter.');
        }
      } else {
        // user exits
        this.users = this.users.filter((u) => u.name !== user.name);
        this.currCapacity -= user.weight;
        console.log(`${user.name} exited at floor ${targetFloor}`);
      }

      callback();
    }, 500);
  }
}

class Person {
  constructor(name, weight) {
    this.name = name;
    this.weight = weight;
  }
}

/////// TEST ///////

let B1 = new Building();

for (let i = 0; i <= 6; i++) {
  B1.addFloor(i);
}

B1.addLift(1, 100);
B1.addLift(2, 200);

let u1 = new Person('Rajat', 40);
let u2 = new Person('Neelesh', 60);

// 🎯 User just requests — no elevator selection
B1.requestLift(u1, 0, 5);
B1.requestLift(u2, 2, 6);
