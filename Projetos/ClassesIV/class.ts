class Vehicle {
  constructor(public color: string) {}

  public honk(): void {
    console.log("beep");
  }
}

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }
  private drive(): void {
    console.log("vroom");
  }
}

const vehicle = new Vehicle("red");
const car = new Car(2, "blue");
