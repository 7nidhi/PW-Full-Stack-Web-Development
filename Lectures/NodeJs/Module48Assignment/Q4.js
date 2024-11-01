/* Write a Node.js program that uses the OS module to retrieve information 
about the current operating system. */


const os = require('os');
console.log('Operating System:', os.type());               // OS type (e.g., Linux, Darwin, Windows_NT)
console.log('OS Platform:', os.platform());               // OS platform (e.g., linux, darwin, win32)
console.log('OS Architecture:', os.arch());               // OS architecture (e.g., x64, arm)
console.log('OS CPU Info:', os.cpus());                   // Information about the system's CPUs
console.log('Total Memory:', os.totalmem(), 'bytes');     // Total system memory in bytes
console.log('Free Memory:', os.freemem(), 'bytes');       // Free system memory in bytes
console.log('Home Directory:', os.homedir());             // Home directory path
console.log('OS Uptime:', os.uptime(), 'seconds');        // System uptime in seconds
console.log('Network Interfaces:', os.networkInterfaces()); // Network interfaces
