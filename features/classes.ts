class Vehicle {
  constructor(public color: string) {}

  public drive(): void {
    console.log('vroom vroom');
  }

  protected honk(): void {
    console.log('beep beep');
  }
}

class Car extends Vehicle {
  // adding the color to the car instance example
  // color: string;

  // constructor(colorVal: string) {
  //   super(); // call parent class's constructor
  //   this.color = colorVal;
  // }

  // alternative syntax where you add public and that automatically
  // sets the color to a public instance variable using whichever value is
  // passed in
  //   constructor(public colorVal: string) {}
  
  // if this constructor was not defined in Car
  // typescript would automatically just take the color 
  // and pass it to the parent's constructor
  // but if your child class needs a constructor, then this 'super' method
  // is required to pass the data up to the parent class
  constructor(public wheels: number, color: string) {
    super(color);
  }

  private driveCar(): void {
    console.log('car goes vroom vroom');
  }

  public startDrivingProcess(): void {
    console.log('starting the driving process...');
    this.driveCar();
    this.honk();
  }
}

const car = new Car(4, 'blue');

car.startDrivingProcess();

console.log('wheels', car.wheels);
console.log('color', car.color);
