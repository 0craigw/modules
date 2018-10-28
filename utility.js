"use strict";
exports.__esModule = true;
function logToScreen(str) {
    console.log(str);
}
exports.logToScreen = logToScreen;
var otherUtility_1 = require("./otherUtility");
exports.logError = otherUtility_1.logError;
function dontExportThis() {
    console.log("floop");
}
var Animal = /** @class */ (function () {
    function Animal(animal_id, kgs) {
        this.animal_id = animal_id;
        this.kgs = kgs;
    }
    //   protected readonly kgs: number;
    //   protected readonly animal_id: number;
    //   getAnimal_Id() {
    //     return this.animal_id;
    //   }
    Animal.prototype.feed = function (kgs) {
        return new Animal(this.animal_id, this.kgs + kgs);
    };
    return Animal;
}());
exports.Animal = Animal;
