//Determine if a year is a leap year using the modulo operator.

function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return true;
    } else {
        return false;
    }
}


let year = 2100;
console.log(`${year} is leap year:= ${isLeapYear(year)}`);