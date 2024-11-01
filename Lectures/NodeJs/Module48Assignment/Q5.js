/* Write a Node.js program that uses the Path module to manipulate file paths. */

// Import the path module
const path = require('path');
const filePath = '/Users/nidhi/Documents/projects/nodejs/example.txt';

// Join two or more path segments
const joinedPath = path.join('/Users', 'nidhi', 'Documents', 'projects', 'nodejs', 'example.txt');
console.log('Joined Path:', joinedPath);

// Resolve a sequence of paths into an absolute path
const resolvedPath = path.resolve('nodejs', 'example.txt');
console.log('Resolved Path:', resolvedPath);

// Get the file name from a file path
const fileName = path.basename(filePath);
console.log('File Name:', fileName);

// Get the file extension from a file path
const fileExtension = path.extname(filePath);
console.log('File Extension:', fileExtension);

// Get the directory name from a file path
const dirName = path.dirname(filePath);
console.log('Directory Name:', dirName);

// Normalize a path (resolves `..` and `.` segments)
const normalizedPath = path.normalize('/Users/nidhi/../nidhi/Documents/./projects/nodejs/example.txt');
console.log('Normalized Path:', normalizedPath);

// Check if a given path is absolute
const isAbsolute = path.isAbsolute(filePath);
console.log('Is Absolute Path:', isAbsolute);

// Parse a path into an object with different components
const parsedPath = path.parse(filePath);
console.log('Parsed Path:', parsedPath);
