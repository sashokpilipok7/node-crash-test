// console.log(global);

global.setTimeout(() => {
    console.log('ine the timeout HEEELOOOO:)))')
    clearInterval(interval);
}, 3000)

const interval = setInterval(() => {
    console.log('in interval HELLOOOO:(((')
},1000)

console.log(__dirname)
console.log(__filename)