const profile = {
  name: 'Akyuna',
  age: 28,
  coords: {
    lat: 2,
    lng: 3,
  },
  setAge(age: number) {
    this.age = age;
  },
};

// destructured object prop with annotation
const { age }: { age: number } = profile;

const {
  coords: { lat, lng },
}: { coords: { lat: number; lng: number } } = profile;
