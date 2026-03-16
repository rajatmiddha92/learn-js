"use strict";
//Type script enums
var Roles;
(function (Roles) {
    Roles["user"] = "user";
    Roles["admin"] = "admin";
})(Roles || (Roles = {}));
const obj = {
    Name: "Rajat",
    Age: 22,
    Permission: Roles.user,
};
//tuples are fixed size so used when you are sure
const userInFo = [12, "Rajat", true];
//generics
function some(arg) {
    console.log(arg.length);
    return arg.length;
}
console.log(some([1, 2, 3, 4, 5]));
