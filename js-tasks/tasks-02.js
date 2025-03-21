// String -> array
function stringToArray(string) {
  return string.split(" ");
}

// DNA to RNA Conversion
function DNAtoRNA(dna) {
  return dna.replace(/T/g, "U");
}

// Find Maximum and Minimum Values of a List
var min = function (list) {
  return Math.min(...list);
};

var max = function (list) {
  return Math.max(...list);
};

// Smallest value of an array
function min(arr, toReturn) {
  return toReturn == "value" ? Math.min(...arr) : arr.indexOf(Math.min(...arr));
}

// You Can't Code Under Pressure #1
function doubleInteger(i) {
  return i * 2;
}

// Twice as old
function twiceAsOld(dadYearsOld, sonYearsOld) {
  return Math.abs(dadYearsOld - sonYearsOld * 2);
}

// Get Nth Even Number
function nthEven(n) {
  return n * 2 - 2;
}

// What's the real floor?
function getRealFloor(n) {
  return n >= 13 ? n - 2 : n >= 1 ? n - 1 : n;
}

// Beginner Series #2 Clock
function past(h, m, s) {
  return ((h * 60 + m) * 60 + s) * 1000;
}

// Is n divisible by x and y?
function isDivisible(n, x, y) {
  return n % x + n % y === 0;
}
