import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

console.log('------------------------------------------------');

const numbersCollection = new NumbersCollection([10, 3, -5, 0]);

console.log('numbersCollection length: ', numbersCollection.length);
console.log('unsorted numbersCollection: ', numbersCollection.data);

numbersCollection.sort();

console.log('sorted numbersCollection: ', numbersCollection.data);

console.log('------------------------------------------------');

const charactersCollection = new CharactersCollection('xyzaSbdaefM');

console.log('charactersCollection length: ', charactersCollection.length);
console.log('unsorted charactersCollection: ', charactersCollection.data);

charactersCollection.sort();

console.log('sorted charactersCollection: ', charactersCollection.data);

console.log('------------------------------------------------');

const linkedList = new LinkedList();

linkedList.add(7);
linkedList.add(2);
linkedList.add(4);
linkedList.add(9);
linkedList.add(12);
linkedList.add(13);
linkedList.add(64);
linkedList.add(999);

linkedList.sort();

console.log('linked list length', linkedList.length);

console.log('*******start linked list sorted*******');
linkedList.print();
console.log('*******end linked list sorted*******');

console.log('------------------------------------------------');
