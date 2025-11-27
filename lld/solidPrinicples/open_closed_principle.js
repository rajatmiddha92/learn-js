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


// --------------------------------------
// PRODUCT
// --------------------------------------
class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

// --------------------------------------
// SHOPPING CART
// --------------------------------------
class ShoppingCart {
  constructor() {
    this.cartlist = [];
  }

  addProd(product) {
    this.cartlist.push(product);
  }

  calculateTotal() {
    return this.cartlist.reduce((sum, item) => sum + item.price, 0);
  }
}

// --------------------------------------
// INVOICE PRINTER
// --------------------------------------
class PrintInvoice {
  constructor(cart) {
    this.cart = cart;
  }

  print() {
    console.log("---- Invoice ----");
    this.cart.cartlist.forEach((p) => {
      console.log(`Product: ${p.name} | Price: ${p.price}`);
    });
    console.log("Total:", this.cart.calculateTotal());
  }
}

// --------------------------------------
// DB PROVIDER INTERFACE (STRATEGY)
// --------------------------------------
class DBProvider {
  save(data) {
    throw new Error("save() must be implemented by providers");
  }
}

// --------------------------------------
// SQL PROVIDER
// --------------------------------------
class SQLProvider extends DBProvider {
  save(data) {
    console.log("💾 Saving to SQL Database...");
    console.log("SQL Data:", data);
  }
}

// --------------------------------------
// MONGO PROVIDER
// --------------------------------------
class MongoProvider extends DBProvider {
  save(data) {
    console.log("🍃 Saving to MongoDB...");
    console.log("Mongo Data:", data);
  }
}

// --------------------------------------
// SAVE TO DB (NO CHANGE EVER AGAIN)
// --------------------------------------
class SaveToDB {
  constructor(provider) {
    this.provider = provider; // inject provider
  }

  save(data) {
    this.provider.save(data);
  }
}

// --------------------------------------
// USAGE
// --------------------------------------
let cart = new ShoppingCart();
let mouse = new Product("HP Mouse", 399);
let laptop = new Product("Acer Laptop", 49999);

cart.addProd(mouse);
cart.addProd(laptop);

// Print invoice
let invoice = new PrintInvoice(cart);
invoice.print();

// Save to different databases
let sqlSaver = new SaveToDB(new SQLProvider());
sqlSaver.save(cart.cartlist);

let mongoSaver = new SaveToDB(new MongoProvider());
mongoSaver.save(cart.cartlist);


