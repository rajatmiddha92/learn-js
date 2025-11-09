//Type script enums

enum Roles {
  user = "user",
  admin = "admin",
}

type userDetails = {
  Name: string;
  Age: number;
  Permission: Roles;
};

const obj: userDetails = {
  Name: "Rajat",
  Age: 22,
  Permission: Roles.user,
};

//Tuples

type userdetails = readonly [number, string, boolean];

//tuples are fixed size so used when you are sure

const userInFo: userdetails = [12, "Rajat", true];
//generics

function some<T>(arg: T[]): number {
  console.log(arg.length);
  return arg.length;
}

console.log(some([1, 2, 3, 4, 5]));
