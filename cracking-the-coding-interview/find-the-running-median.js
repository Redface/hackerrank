process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
  input_stdin += data;
});

process.stdin.on('end', function () {
  input_stdin_array = input_stdin.split("\n");
  main();
});

function readLine() {
  return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////
const assert = require('assert');
function validateNumberOfValue(numberOfValue) {
  assert(1 <= numberOfValue && numberOfValue <= Math.pow(10, 5), 'value is out of range');
}
function validateValue(val) {
  assert(0 <= val && val <= Math.pow(10, 5), 'value is out of range');
}
function isOddLength(arr) {
  return arr.length % 2 !== 0;
}
function getOddMedian(arr) {
  const length = arr.length
  return length === 1 ? arr[0] : arr[length / 2];
}
function getEvenMedian(arr) {
  const medianIndex = arr.length / 2;
  const beforeMedianIndex = medianIndex, afterMedianIndex = medianIndex + 1;
  return (arr[beforeMedianIndex] + arr[afterMedianIndex]) / 2;
}
function getMedian(arr) {
  if (isOddLength(arr)) return Number.parseFloat(getOddMedian(arr)).toFixed(1);
  else return Number.parseFloat(getEvenMedian(arr)).toFixed(1);
}
function main() {
  var n = parseInt(readLine());
  var a = [];
  validateNumberOfValue(n);
  for (var a_i = 0; a_i < n; a_i++) {
    a[a_i] = parseInt(readLine());
    validateValue(a[a_i]);
    console.log(getMedian(a.sort()));
  }

}
