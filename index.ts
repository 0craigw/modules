import * as utility from "./utility";

let animal = new utility.Cow(1, 450);

let newAnimal = animal.feed(10);
// console.log(newAnimal.kgs);

console.log(utility.connectionString);

class Foo implements utility.Bovine {
  Die(): void {
    throw new Error("Method not implemented.");
  }
  animal_id: Number;
  isFurry: boolean;
}
