export function logToScreen(str) {
  console.log(str);
}

export { logError } from "./otherUtility";

function dontExportThis() {
  console.log("floop");
}

export interface Animal {
  animal_id: Number;
}

export interface Bovine extends Animal {
  isFurry: boolean;
}

export class Cow implements Bovine {
  constructor(readonly animal_id: number, readonly kgs: number) {}
  isFurry: boolean;

  feed(kgs): Animal {
    return new Cow(this.animal_id, this.kgs + kgs);
  }
}

export class Fresian extends Cow {
  constructor(readonly animal_id: number, readonly kgs: number) {
    super(animal_id, kgs);
  }
}

let myCow = new Fresian(1, 700);
myCow.isFurry = true;

export const connectionString = "some useful string";
