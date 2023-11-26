// 기본형 (Primitives): number, string, boolean
// More complex types: arrays, objects
// Function types, parameters

// Primitives

let age: number;

age = 12;

let userName: string;

userName = "jeong";

let isInstructor: boolean;

isInstructor = true;

// More complex types

let hobbies: string[];

hobbies = ["sports", "Cooking"];

let person: {
  name: string;
  age: number;
};

person = {
  name: "Jeong",
  age: 32,
};

// person = {
//   isEmployee: true
// }

let people: {
  name: string;
  age: number;
}[];

// Type inference

let course = "React - The Complete Guide";

course = 12345;
