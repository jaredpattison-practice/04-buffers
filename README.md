![CF](http://i.imgur.com/7v5ASc8.png) LAB
=================================================

## Buffers

### Author: Jared

### Links and Resources
[![Build Status](https://www.travis-ci.com/jaredpattison/04-buffers.svg?branch=master)](https://www.travis-ci.com/jaredpattison/04-buffers)
* [repo](https://github.com/jaredpattison/04-buffers)
* [travis](https://www.travis-ci.com/jaredpattison/04-buffers)

Description:
This project involves reading and writing data to and from files using buffers. In the first exercise data is written in string form, converted to a buffer and written to a file using Node.js file system 'fs'. The second exercise takes data from a given text file, parses it and makes changes it (in this case, adding various HTML tags), and then writes it back to the same file.

### Modules
#### `buffer.js`
#### `create-html.js`
##### Exported Values and Methods

There are no exported modules, create-html.js can be run to read in a file specified from the command line: 

running the following command line argument will read pair-programming.txt and write new pair-programming html file:
node create-html.js files/pair-programming.txt
