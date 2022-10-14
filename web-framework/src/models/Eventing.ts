// this is a type alias. These are useful for creating Tuples
// or defining singular function input/output definitions
type Callback = () => void;

export class Eventing {
  // `on` method events will be stored here
  // the key is a string representing the event name
  // the value will be an array of all callback functions
  // registered for that event, so that that when the event
  // is triggered, we will be able to iterate through the array
  // and trigger all callbacks to run
  private events: { [key: string]: Callback[] } = {};

  on(eventName: string, callback: Callback): void {
    const handlers = this.events[eventName] || [];
    handlers.push(callback);
    this.events[eventName] = handlers;
  }

  trigger(eventName: string): void {
    const handlers = this.events[eventName];

    if (!handlers || handlers.length === 0) return;

    handlers.forEach((callback) => callback());
  }
}
