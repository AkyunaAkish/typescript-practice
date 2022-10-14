import axios, { AxiosResponse } from 'axios';

export interface UserProps {
  name?: string; // optional, to allow for setting individual fields without causing an interface error (due to not providing all props)
  age?: number;
  id?: number;
}

export class User {
  constructor(private data: UserProps) {}

  get(prop: string): string | number {
    return this.data[prop];
  }

  set(update: UserProps): void {
    // this.data = {
    //   ...this.data,
    //   ...update,
    // };

    // override this.data props with
    // the update object
    Object.assign(this.data, update);
  }

  async fetch(): Promise<any> {
    try {
      // post a new user to the db.json file using the
      // json-server npm module
      const response: AxiosResponse = await axios.get(
        `http://localhost:3000/users/${this.get('id')}`
      );

      this.set(response.data);

      return response.data;
    } catch (error) {
      console.log('Error fetching user', error);

      return error;
    }
  }

  async save(): Promise<any> {
    const id = this.get('id');

    if (id) {
      // user already exists, so update
      try {
        const response: AxiosResponse = await axios.put(
          `http://localhost:3000/users/${id}`,
          this.data
        );

        this.set(response.data);
        return response.data;
      } catch (error) {
        console.log('error updating user', error);

        return error;
      }
    } else {
      // user doesn't exist yet, create new user
      try {
        const response: AxiosResponse = await axios.post(
          'http://localhost:3000/users',
          this.data
        );

        this.set(response.data);
        return response.data;
      } catch (error) {
        console.log('error adding new user', error);

        return error;
      }
    }
  }
}
