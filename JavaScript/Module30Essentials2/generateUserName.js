/*
Prompt the user to enter full name .Genrate a user name for them based on the input start with "@",
followed by their full name and ending with fullnam lenght.
*/
let fullName=prompt("Enter the full Name");
let userName="@"+fullName.concat(fullName.length);
console.log(userName);