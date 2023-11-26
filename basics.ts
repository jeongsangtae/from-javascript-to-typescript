// 기본형 (Primitives): number, string, boolean
// More complex types: arrays, objects
// Function types, parameters

// Primitives

let age: number;

age = 12;

let userName: string | string[];

userName = "jeong";

let isInstructor: boolean;

isInstructor = true;

// More complex types

let hobbies: string[];

hobbies = ["sports", "Cooking"];

type Person = { name: string; age: number };

let person: Person;

person = {
  name: "Jeong",
  age: 32,
};

// person = {
//   isEmployee: true
// }

let people: Person[];

// Type inference

let course = "React - The Complete Guide";
// let course: string = "React - The Complete Guide"

// course = 12345;

// Union Type

let reactCourse: string | number | boolean = "React - The Complete Guide";

reactCourse = 12345;
