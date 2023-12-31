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

// Function & types

const add = (a: number, b: number): number => {
  return a + b;
};

const printOutput = (value: any) => {
  console.log(value);
};

// Generics

const insertAtBeginning = <T>(array: T[], value: T) => {
  const newArray = [value, ...array];
  return newArray;
};

const demoArray = [1, 2, 3];

const updatedArray = insertAtBeginning(demoArray, -1);

const stringArray = insertAtBeginning(["a", "b", "c"], "d");

// updatedArray[0].split("");
