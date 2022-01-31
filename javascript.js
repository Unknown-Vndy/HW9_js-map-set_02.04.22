'use strict';


const arr = [[1, "first"], [3, "third"]];

const map = new Map(arr);

const values = map.values();
const keys = map.keys();
console.log(keys);
console.log(values);
console.log(map.size);
map.set(2, 'second')
map.delete(3)
map.has(1) ? console.log('map has this key') : console.log('map does not have this key');


const set = new Set([1,2,3]);
set.has(3) ? console.log('set has this value') : console.log('set does not have this value');
set.has(4) ? console.log('set has this value') : console.log('set does not have this value');
set.add(4);
set.add(5);
for (const value of set) {
   console.log(value);
}
let sum = 0;
for (const value of set) {
   sum += value;
}
console.log(`sum = ${sum}`);
set.delete(2);
set.clear();
console.log(set);


const arr1 = [1, 6, 9, 4, 9, 1, 5, 6];

const uniqueOfArr1 = new Set(arr1);
console.log(uniqueOfArr1);

const arr2 = [5, 10, 11];

const uniqueOfBothArrays = new Set([...arr1, ...arr2]);
console.log(uniqueOfBothArrays);