//var generateName = require('sillyname');

import generateName from "sillyname";
var sillyName = generateName();

import { randomSuperhero } from "superheroes";
const heroName = randomSuperhero();

console.log(`My name is ${sillyName}.`);
console.log(`I am ${heroName}.`);