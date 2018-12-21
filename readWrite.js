'use strict';

const fs = require('fs');

let file = './files/pair-programming.txt';

let buff = fs.readFileSync(file);



// First <article> tag
let buffStr = buff + '60 97 114 116 105 99 108 101 61';

// buffStr = buffStr + buff;

let newBuff = Buffer.allocUnsafe(buffStr.length);

for (let i = 0; i < buffStr.length; i++) {
  newBuff[i] = buffStr[i];
}

//buff.fill

console.log(newBuff);

fs.writeFile('./files/pair-programming.html', newBuff, (err) => {
  if (err) throw err;
  console.log('writting to pair-programming.html!');
});