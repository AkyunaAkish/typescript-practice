import { faker } from '@faker-js/faker';
import { Mappable } from './CustomMap';

// implements Mappable tells typescript that this
// class is required to satisfy the requirements of the
// mappable interface, and will therefore
// show errors in this file if the properties do not
// properly implement mappable
class User implements Mappable {
  name: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: +faker.address.latitude(),
      lng: +faker.address.longitude(),
    };
  }

  markerContent() {
    return `<h3>User name: ${this.name}</h3>`;
  }
}

export default User;
