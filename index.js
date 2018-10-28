"use strict";
exports.__esModule = true;
var utility = require("./utility");
var animal = new utility.Animal(1, 450);
var newAnimal = animal.feed(10);
console.log(newAnimal.kgs);
