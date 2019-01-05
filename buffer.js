'use strict';

// Confirm which endian you are
const os = require('os');
console.log(os.endianness());

const fs = require('fs');

let str = '\'use strict\';\n\nlet arr = [\'Jenny\', \'Stanny\',\'Bobby\'];\nfor(let name of arr) {console.log(name);}';
let data = Buffer.allocUnsafe(str.length);

for (let i = 0; i < str.length; i++) {
  data[i] = str.charCodeAt(i);
}

fs.writeFile('./files/loop.js', data, (err) => {
  if (err) throw err;
  console.log('The file has been saved in files path. Hi Jared!');
});
