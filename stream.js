const fs = require('fs');

const readFile = fs.createReadStream('./docs/blog3.txt', { encoding: 'utf8' });
const writeFile = fs.createWriteStream('./docs/blog4.txt');

// readFile.on('data', (chunk) => {
//     console.log('--- NEW CHUNK ---');
//     console.log(chunk);

//     writeFile.write('--- NEW CHUNK ---\n');
//     writeFile.write(chunk);
// });

readFile.pipe(writeFile);