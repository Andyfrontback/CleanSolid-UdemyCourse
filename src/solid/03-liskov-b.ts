export abstract class Car {
  public abstract getNumberOfSeats(): number;
}

export class Tesla extends Car {
  constructor(private numberOfSeats: number) {
    super();
  }
  public getNumberOfSeats() {
    return this.numberOfSeats;
  }
}

export class Audi extends Car {
  constructor(private numberOfSeats: number) {
    super();
  }
  public getNumberOfSeats() {
    return this.numberOfSeats;
  }
}

export class Toyota extends Car {
  constructor(private numberOfSeats: number) {
    super();
  }
  public getNumberOfSeats() {
    return this.numberOfSeats;
  }
}

export class Honda extends Car {
  constructor(private numberOfSeats: number) {
    super();
  }
  public getNumberOfSeats() {
    return this.numberOfSeats;
  }
}
