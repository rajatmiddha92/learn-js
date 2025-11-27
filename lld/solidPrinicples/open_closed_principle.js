// Open/Closed Principle

// A class/modules/functions should be open for extension but closed for modification

//How to Implement the Open-Closed Principle in JavaScript
// The first example of the open-closed principle I will show is a class using a
// switch or multiple if statements. That’s because in code like this, there’s a very
// real possibility you will modify the class using the switch or if statements.
// And that violates the open-closed principle in the process.

// class Footballer {
//   constructor(name, age, role) {
//     this.name = name;
//     this.age = age;
//     this.role = role;
//   }

//   getFootballerRole() {
//     switch (this.role) {
//       case 'goalkeeper':
//         console.log(`The footballer, ${this.name} is a goalkeeper`);
//         break;
//       case 'defender':
//         console.log(`The footballer, ${this.name} is a defender`);
//         break;
//       case 'midfielder':
//         console.log(`The footballer, ${this.name} is a midfielder`);
//         break;
//       case 'forward':
//         console.log(`The footballer, ${this.name} plays in the forward line`);
//         break;
//       default:
//         throw new Error(`Unsupported animal type: ${this.type}`);
//     }
//   }
// }

// const kante = new Footballer('Ngolo Kante', 31, 'midfielder');
// const hazard = new Footballer('Eden Hazard', 32, 'forward');

// kante.getFootballerRole(); // The footballer, Ngolo Kante is a midfielder
// hazard.getFootballerRole(); // The footballer, Eden Hazard plays in the forward line

// There are more football roles like winger, defensive midfielder, and more. So,
// in the code above, what do you think would happen if you had to add another footballer
// role on the pitch? You would have to modify the switch statement. That violates
// the open-closed principle because you have to modify the existing code.

// To fix the violation, you have to create a separate role class to consume the method
// that gets the player role from the super class. But it doesn’t end there. You then
// need to create a different class for each role that extends the class which gets
// the player role.

class Footballer {
  constructor(name, age, role) {
    this.name = name;
    this.age = age;
    this.role = role;
  }

  getFootballerRole() {
    this.role.getRoleDetails(this.name);
  }
}
class Role {
  getRoleDetails(name) {
    throw new Error('Method not implemented');
  }
}

class Goalkeeper extends Role {
  getRoleDetails(name) {
    console.log(`The footballer, ${name} is a goalkeeper`);
  }
}

class Defender extends Role {
  getRoleDetails(name) {
    console.log(`The footballer, ${name} is a defender`);
  }
}

class Midfielder extends Role {
  getRoleDetails(name) {
    console.log(`The footballer, ${name} is a midfielder`);
  }
}

let kante = new Footballer('Ngolo Kante', 31, new Defender());
let ans = kante.getFootballerRole();
let shudi = new Footballer('Shudi', 25, new Midfielder());
shudi.getFootballerRole();

// | Concept                  | Role                                 |
// | ------------------------ | ------------------------------------ |
// | `Footballer`             | Core entity                          |
// | `Role`                   | Abstract behavior                    |
// | `Defender`, `Goalkeeper` | Concrete roles implementing behavior |



class SaveToDB {
  constructor(provider) {
    this.provider = provider;
  }

  save(data) {
    this.provider.save(data);
  }
}

