//Type script enums
var Roles;
(function (Roles) {
  Roles["user"] = "user";
  Roles["admin"] = "admin";
})(Roles || (Roles = {}));
var obj = {
  Name: "Rajat",
  Age: 22,
  Permission: Roles.user,
};
//tuples are fixed size so used when you are sure
var userInFo = [12, "Rajat", true];
