import { User } from './models/User';

const init = async () => {
  const user = new User({ name: 'new record', age: 0 });

  await user.save();
  await user.fetch();

  console.log('user', user);
};

init();
