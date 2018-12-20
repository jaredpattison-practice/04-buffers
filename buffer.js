'use strict';

// Confirm which endian you are
const os = require('os');
console.log(os.endianness());

const fs = require('fs');

const data = new Uint8Array(Buffer.from('Hello Node.js'));
fs.writeFile('message.txt', data, (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});