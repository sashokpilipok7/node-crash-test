const {people, ages} = require('./people');
console.log(people, 'people');
console.log(ages, 'ages')

const os = require('os');

console.log(os.platform(), os.homedir())