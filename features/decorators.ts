@classDecorator
class Boat {
  @testDecorator
  color: string = 'red';

  get formattedColor(): string {
    return `This boat's color is ${this.color}`;
  }

  // the decorator gets ran one single time when the class
  // is defined. Not when the class is instantiated to a particular variable
  @logError('Oops, the boat was sunk!')
  pilot(@parameterDecorator speed: string): void {
    if (speed === 'fast') {
      console.log('swish');
    } else {
      console.log('not moving');
      throw new Error();
    }
  }
}

// wrapping a decorator in a function like this
// is called a Decorator Factory
// it allows a decorator to be called and
// be given arguments that can customize
// the behavior of a decorator
function logError(errorMessage: string) {
  return function (
    target: any,
    key: string,
    descriptor: PropertyDescriptor
  ): void {
    // target is the class the decorator is being used in/on
    // the key is the exact property/method the decorator is attached to
    // the descriptor is an object that is meant to configure a property on another object
    // writable, enumerable, value, configurable

    const method = descriptor.value; // a reference to the pilot method this decorator is used on
    descriptor.value = function () {
      try {
        method();
      } catch (error) {
        console.log(errorMessage);
      }
    };
  };
}

function parameterDecorator(target: Boat, key: string, index: number) {
  console.log(key);
  console.log(index); // the position of the argument for the function this decorator is applied to

  // parameter decorators are rarely used, but there are some advanced scenarios where
  // you may need to know the parameters available when a class is defined
}

function classDecorator(constructor: Function) {
    console.log(constructor);
}

function testDecorator(target: any, key: string) {
  console.log(target);
  console.log(key);

  // a decorator cannot access instance properties
  // because a decorator is ran before a class instance
  // is created and variables are set when a class constructor is ran
  // or a class is instantiated
  // so target[key] would always be undefined in a decorator
}

const boat = new Boat();
boat.pilot('idle');
// since the pilot method throws an error
// the try/catch in the decorator will apply reusable
// error logging for any method that uses this decorator and throws an error
