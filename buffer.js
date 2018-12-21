'use strict';

// Confirm which endian you are
// const os = require('os');
// console.log(os.endianness());

const fs = require('fs');

let str = '\'use strict\';\n\nlet arr = [\'Jenny\', \'Stanny\',\'Bobby\'];\nfor(let name of arr) {console.log(name);}';
let data = Buffer.allocUnsafe(str.length);

for (let i = 0; i < str.length; i++) {
  data[i] = str.charCodeAt(i);
}

// for (const value of data.values()) {
//   console.log(value);
// }

fs.writeFile('./files/loop.js', data, (err) => {
  if (err) throw err;
  console.log('The file has been saved in files path. Hi Jared!');
});

// let daddyCool = [0x44, 0x41, 0x44, 0x44, 0x59, 0x20, 0x43, 0x4F, 0x4F, 0x4C];
// for (let i = 0; i < daddyCool.length; i++) {
//   data[i] = daddyCool[i];
// }
// let arr=[108, 101, 116, 32, 97, 61, 91, 39, 74, 101, 110]