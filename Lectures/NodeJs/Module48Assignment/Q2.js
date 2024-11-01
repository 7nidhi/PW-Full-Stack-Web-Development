/* Write a Node.js program that reads content from a file named "input.txt " 
and writes the content to a new file named "output.txt ". */

const fs = require('fs');
fs.readFile('input.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading the file:', err);
    return;
  }
  fs.writeFile('output.txt', data, (err) => {
    if (err) {
      console.error('Error writing to the file:', err);
      return;
    }

    console.log('Content successfully written to output.txt');
  });
});

