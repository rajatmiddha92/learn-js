// Class and Objects

//  A class is a blueprint that object should follow

//  Object are entities in the real world

// ex -

// let say we need to design a system for our college
// in which we can store the details of every teachers

// we need to know first what information of teachers need to be stored
// let say name, department, subject, salary, etc.
// these are all the properties in technical terms.
// which are associated with the entity
// so what is teacher here - teacher is an entity

// also they have methods/ extra functions -
// let say we want a department to be flexible needs to change in future
// so we can have changeDept() method/function
// other ex taxCalculatorSalary()

// teacher is an real world entity, so we make teacher as an object
// and with every object we have different properties & methods are associated.

// methods are basically functions written inside the class.

// let suppose we need to store information for first teacher

// we write
// let t1Name = "Rahul"
// let t1Dept = "Civil"
// let t1subject = "Engineering lab"
// let t1Salary  = "33000"

// but in future let say 2 teacher joined
// we write
// let t2Name = "Manoj"
// let t2Dept = "Computer Science"
// let t2subject = "Engineering lab"
// let t2Salary  = "38000"

// let say later we have 50 teacher then we have to declare properties for every
// teacher, so there is the problem we have to write it 50 times where our code is
// not reusable.
// if we have written logic once, we dont have to write same logic for every
// teacher which is a bad programming technique.

// so to avoid this bad programming, we use OOPS Concepts
// so ek baar class bana do (blueprint), uske baad toyota ek k baad ek gaadi /
// manufacture krega same blueprint pe

// same in our code, we will only tell once the property & method teacher(entity)
// will have, so we can create different profile of teachers.

// instead of declaring lots of variable in our code,
// we can use classes and object concept

// what does this concept say
// you just create one class (blueprint) - teacher kaisa dikhna chahiye

// then app teacher object bana lo
// let t1 = new Teacher("some","mechanical","Engineering Mechanics",40000)
// now even we need 50/100/or lacs teacher, we dont have to repeat code
// code becomes reusable, because isi same class ko we can use and create
// multiple objects.

class Teacher {
  // properties or attributes
  name;
  dept;
  subject;
  salary;

  constructor(name, dept, subject, salary) {
    this.name = name;
    this.dept = dept;
    this.subject = subject;
    this.salary = salary;
  }

  // function written inside the class is know as methods
  // methods are also know as member functions
  // bcz they become member of this class
  changeDept(department) {
    this.dept = department;
  }
}

let t1 = new Teacher("Rahul", "Civil", "some subject", 30000);
t1.changeDept("mechanical");
console.log(t1);

// Access modifiers

// private - data & methods accesible inside class
// public - data & methods accesible to everyone
// protected - data & methods accesible inside class & its derived class

// data means properties

// by default in js, it is public but in c++ its private

// for private syntax in js
// class Teacher {
//   #name;
//   #dept;
//   #subject;
//   #salary;

//   constructor(name, dept, subject, salary) {
//     this.#name = name;
//     this.#dept = dept;
//     this.#subject = subject;
//     this.#salary = salary;
//   }

//  if we want to make method private we have to write #changeDept as function name
//   changeDept(department) {
//     this.#dept = department;
//   }
// }

// let t1 = new Teacher("jih", "dad", "some", 30000);
// t1.changeDept("jbj"); // it will work as it is public
// console.log(t1); {} // empty object private properties

// sometimes if want to give access to private properties
// outside the class so we do not give direct access to private properties
// we can create & use getter and setter methods
// getter - to get the value of private properties
// setter - to set the value of private properties
// getter and setter are public

// class Employee {
//   #salary;
//   constructor(name) {
//     this.naamKyahai = name;
//   }

// setter method
//   setSalary(s) {
//     this.#salary = s;
//   }

// getter method
//   getSalary() {
//     console.log(this.#salary);
//   }
// }

// let t2 = new Employee("rwewe");

// t2.setSalary("10000");
// t2.getSalary();

// pillars of OOPS

// 1. Encapsulation

// Encapsulation is wrapping up of data & member functions in a single unit inside class

// we make a capsule of data/properties and methods
// humne kuch properties li or kuch methods liye or unko mila k ek capsule bana diya
// or vo capsule ko humne class ka naam de diya

// so this is encapsulation which we already done above for teacher class
// encapsulation is achieved by using classes
// encapsulation is also used to hide the data
// (jo sensitive information hoti hai usko hide kar lena)
// so we can use private access modifiers to hide the data
// to hide the data
// so we can use private properties
// so we can use getter and setter methods
// to access the private properties

//   class BankAccount {
//       #balance; // Private field

//       constructor(initialBalance) {
//         this.#balance = initialBalance;
//       }

//       deposit(amount) {
//         if (amount > 0) {
//           this.#balance += amount;
//         }
//       }

//       getBalance() {
//         return this.#balance;
//       }
//     }


//  const myAccount = new BankAccount(100);
//   myAccount.deposit(50);
//   console.log(myAccount.getBalance()); // Output: 150
// console.log(myAccount.#balance); // SyntaxError - direct access is prevented
// let understand with example

// if we want to design a Banking System

// let crate a class Account

class Account {
  #balance;
  #password; // data hiding / encapsulation
  // as balance & password are sensitive information
  // we dont want other classes or objects to access them
  // so we make them private
  constructor(name, id, balance, passcode) {
    this.accountId = id;
    this.useName = name;
    this.#balance = balance;
    this.#password = passcode;
  }
}

// we going to discuss special function called constructor

// special method invoked automatically at the time of object creation. used
// for initialization of properties

// same name as class in C++ in js it is by name constructor only
// so Teacher is a constructor function/method
// constructor does not have return type
// only called once automatically at the time of object creation
// memory allocation happens when object is created (constructor is called)

// if we do not write constructor, js will create default constructor
// default constructor will not take any parameters
// default constructor will not initialize any properties
// you have to define properties

// class Employee {
//   #salary;
//   name;
// }

// let t4 = new Employee();
// t4.name = "some";
// console.log(t4);


// class Employee {
//  constructor() {
//          console.log("hi")
//     }  
// }
// let t4=new Employee()
// console.log(t4);
// console.log(t4);
// constructor is called automatically once at the time of object creation
// this time default constructor is not created
// because we have defined constructor


// we can initialize properties in constructor
// so we have to define properties inside the constructor
// so we can use constructor to initialize properties


// use case let say we want to set dept Computer Science for every teacher
// so we can set default value for dept in constructor
// class Teacher {
//   #name;
//   #dept;
//   #subject;
//   #salary;
//   constructor(name, subject, salary) {
//     this.#name = name;
//     this.#dept = "Computer Science"; // default value for dept
//     this.#subject = subject;
//     this.#salary = salary;
//   }
// }
// constructor autmatically define dept for every teacher

// note : constructor cannot be a private method
// class Employee {
//   #constructor(){  // private constructor
//     console.log("hi")
//   }
// }

// let t4=new Employee() // SyntaxError: Class constructor may not be a private method

// types of constructors

// 1. non-parameterized constructor 
// there is no parameter

// // class Car {
// //     constructor()// no parameter  passed in constructor function {
//          this.logo = "Audi";
// //     }
// // }


// 2. parameterized constructor

// class Car {
//     constructor(model)// parameter model passed in constructor function {
//         this.logo = "Audi";
//         this.model = model; // parameter
//     }
// }

// 3. copy constructor

// special constrcutor which is used to copy properties from one object to another

// JavaScript does not have a built-in concept of a "copy constructor" like some other programming languages do. However, you can achieve the same result by using techniques for deep and shallow copying.

// In JavaScript, when you create an object, it is possible to make copies of that object.

// Shallow Copy: This method creates a new object, but it only copies the references to the original object's properties. If the properties are objects themselves, the references to those objects will be shared between the original and the copied object.
// Deep Copy: This method creates an entirely new and independent copy of the original object and all of its nested objects. Changes made to the properties of the original object or its nested objects do not affect the copied object, and vice versa.

// destructor

// It is opposite of constructor
// used to deallocate the memory
// it is automatically called when object is destroyed (main function ends)

// JavaScript does not have the concept of "destructors" in the same way that languages like C++ or Java do. In those languages, destructors are special methods that are automatically called when an object is destroyed or goes out of scope, allowing for cleanup like releasing memory or closing resources.
// Instead, JavaScript uses a garbage collector to automatically manage memory. When an object is no longer referenced by any part of the program, the garbage collector identifies it as "garbage" and reclaims the memory it occupied. This process happens automatically in the background, so developers do not typically need to manually "destroy" objects or implement destructor-like functions for memory management.
// in C++ we can use default destructor to deallocate memory
// or for dynamic memory allocation we can create our own destructor

// destructor is called automatically when main function ends
// representation in C++
// ~Student(){
//     // destructor code
//  delete namePtr;
// }

// Inheritance

// let understand with example
// when you have qualities same as your parent
// which is inherited from your parent

// so, similarly in Inheritance, when member functions 
// & properties are passed on from one class to another
// we call that as inheritance

// the property from class is passed is knowns as parent class/ or base class
// the class who inherit this property is known as child class/ or derived class

// example 
// let say we a person class which have name,age
// now we have another class student which will have name,age,rollno

// but we already declared name and age in person class
// so we can inherit name and age from person class (code resuability)
// and add rollno in student class
// we call this as inheritance


// class Person{
//   name;
//   age;
// }

// class Student extends Person{
  
//   rollno;
 
//   getInfo(){
//     console.log("name of student is", this.name)
//     console.log("age of student is", this.age)
//     console.log("rollno of student is", this.rollno)
//   }
// }

// let studentOne = new Student()
// studentOne.name = "Rajat"
// studentOne.age="22"
// studentOne.rollno="12"

// studentOne.getInfo()

// constuctor diff in Inheritance
// first the constructor of parent class is called
// then the constructor of child class is called

// class Person{
//   name;
//   age;
//   constructor(){
//     console.log("constructor of parent class")
//   }
// }

// class Student extends Person{
  
//   rollno;
//    constructor(){
//      super()
//     console.log("constructor of child class")
//   }
 
//   getInfo(){
//     console.log("name of student is", this.name)
//   }
// }

// let studentOne = new Student()
// studentOne.name = "Rajat"
// studentOne.age="22"
// studentOne.rollno="12"

// studentOne.getInfo()


// mordern syntax
// class Person {
//   name;
//   age;

//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//     console.log("constructor of parent class");
//   }
// }

// class Student extends Person {
//   rollno;

//   constructor(name, age, rollno) {
//     super(name, age); // Call parent constructor with name and age
//     this.rollno = rollno;
//     console.log("constructor of child class");
//   }

//   getInfo() {
//     console.log("name of student is", this.name);
//   }
// }

// // Now create the object with parameters
// let studentOne = new Student("Rajat", "22", "12");
// studentOne.getInfo();

// private propeties / methods in inheritance do not inherit from its parent class
// to child class

// class Person {
//   #name = "Rajat";

//   getName() {
//     return this.#name;
//   }
// }

// class Student extends Person {
//   printName() {
//     // ❌ This will throw an error
//     console.log(this.#name); 
//   }
// }

// let s = new Student();
// s.printName(); // ❌ SyntaxError: Private field '#name' must be declared in an enclosing class

// Ty of Inheritance
// 1. Single level Inheritance
// 2. Multi level Inheritance
// 3. Multiple Inheritance

// the above we have seen is single level inheritance

// let see example of multi level inhertiance

// let say we have same class person and student
// and now understudent we have one more class called graduate student
// with field reserachArea

// class Person{
//   name;
//   age;
//   constructor(name,age){
//     this.name = name;
//     this.age = age;
//   }
// }

// class Student extends Person {
//   rollno;
//   constructor(UserName,rollno,Age){
//     super(UserName,Age)
//     this.rollno=rollno
    
  
    
//   }
// }
// class GraduateStudent extends Student{
//   reserachArea;
//   constructor(var1,var2,var3,reserachArea){
//     super(var1,var2,var3)  // chossing diff varuable nmame for better clarity
//     this.reserachArea = reserachArea // f use diff name here theb at two line above declare variable will be undefined
//   }
// }
// let s = new GraduateStudent("Rjata","22",50,"Data Scientist")
// console.log(s)

// multiple inheritance
// javascript does not support multiple inheritance directly
// you can use mixins to achieve multiple inheritance
// or you can use composition

// Mixin functions
// const TeacherMixin = (Base) => class extends Base {
//   setTeachingInfo(subject, salary) {
//     this.subject = subject;
//     this.salary = salary;
//   }
// };

// class Student {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
// }

// // Apply mixin
// class TeacherAssistant extends TeacherMixin(Student) {
//   constructor(name, age, subject, salary, researchArea) {
//     super(name, age);
//     this.setTeachingInfo(subject, salary);
//     this.researchArea = researchArea;
//   }
// }

// let s = new TeacherAssistant("Rajat", 22, "Civics", 50000, "Data Science");
// console.log(s);


// polymorphism

// polymorphism is the ability of an object to take on many forms
// we can define a two methods with same name but different parameters

// so based on the parameter passed in the function
// the function will behave differently

// this is known as method overloading

// method overloading is not supported in js


//  class Student {
 
  
//   getInfo(){
//     console.log("hi")
//     console.log(this.subject)
//   }
  
//   getInfo(subject){
//     console.log("gi")
//     console.log(subject)
//   }
// }

// let student = new Student("22","CS")
// student.getInfo("Civics")
// student.getInfo()
// in c++ its output is 
// gi
// Civics
// hi
// CS

// but in js its output is
// gi
// Civics
// gi
// undefined

// becuase js does not support method overloading
// write single method based on the parameter passed
//  getInfo(subject){
//      if(subject){
//        console.log("gi")
//        console.log(subject)
//      }
//      else{
//        console.log("hi")
//        console.log(this.subject)
//      }
//    }
 
// this is how method overloading in js is achieved
// compile time polymorphism

// method overriding

// Method overriding occurs when a subclass provides its own specific 
// implementation of a method that is already defined in its parent class. 
// When you call this method, JavaScript will use the subclass's 
// implementation instead of the parent's, which is a runtime decision.

// class Animal {
//     speak() {
//         console.log("Animal makes a sound");
//     }
// }

// class Dog extends Animal {
//     speak() {
//         console.log("Dog barks");
//     }
// }

// class Cat extends Animal {
//     speak() {
//         console.log("Cat meows");
//     }
// }

// const dog = new Dog();
// dog.speak(); 

// const cat = new Cat();
// cat.speak();

// if you inherited the class and define method with same name
// it will use its own method defined in that class
// rather than method inherited from parent class
// the parent class function is said to be overridden


// abstraction

// hiding the implementation details
// showing only the important parts/features

// https://www.geeksforgeeks.org/javascript/abstraction-in-javascript/