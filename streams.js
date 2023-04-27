const fs = require('fs');

const readStream = fs.createReadStream('./docs/blog3.txt', {encoding: 'utf8'});
const writeStream = fs.createWriteStream('./docs/blog5.txt');

readStream.on('data', (chunk) => {
    console.log('----NEW CHUNK----')
    writeStream.write('----NEW CHUNK----')
    writeStream.write(chunk)
})

//pipping

readStream.pipe(writeStream);