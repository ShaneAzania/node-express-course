// GLOBALS  - NO WINDOW !!!!

// __dirname  - path to current directory
/*
require('fs);
require('path');

fs.readFile(path.join(
  __dirname, 'files', 'starter.txt'), 
  'utf8',
  (err, data) => {
    if (err) throw err;
    console.log(data);
  }
)

*/

// __filename - file name

// require    - function to use modules (CommonJS)
/**
 require('./file_name');
 */

// module     - info about current module (file)
/* 
module.exports = { john, peter }
*/

// process    - info about env where the program is being executed
/*
// exit on uncaught exceptions/errors
 process.on('uncaughtException', err => {
  console.error(`there was an error: ${err}`);
  process.exit(1);
 })

// Set a default port if one isn't alreeady provided
const PORT = process.env.PORT || 3500
*/


