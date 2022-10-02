import { faker } from '@faker-js/faker';
import { Mappable } from './CustomMap';

// implements Mappable tells typescript that this
// class is required to satisfy the requirements of the
// mappable interface, and will therefore
// show errors in this file if the properties do not
// properly implement mappable
class Company implements Mappable {
  name: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.name = faker.company.name();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: +faker.address.latitude(),
      lng: +faker.address.longitude(),
    };
  }

  markerContent() {
    return `<h3>Company name: ${this.name}</h3><h4>${this.catchPhrase}</h4>`;
  }
}

export default Company;
