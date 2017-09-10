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

function validateParams(arrLength, leftShiftCount, array) {
  assert(arrLength >= 1 && arrLength <= Math.pow(10, 5), 'array length out of range');
  assert(arrLength === array.length, 'wrong number of array');

  assert(leftShiftCount >= 1 && leftShiftCount <= arrLength, 'left shiftcount out of range');
}
// try 1
// function shiftLeftArray(arrLength, leftShiftCount, array) {
//   if (leftShiftCount === 0) console.log(array.join(' '));
//   else {
//     let newArr = [];
//     if (arrLength > 1) newArr = array.filter((el, i) => i > 0);
//     newArr.push(array[0]);
//     const nextLeftShiftCount = leftShiftCount - 1;
//     shiftLeftArray(arrLength, nextLeftShiftCount, newArr);
//   }
// }
// try 2
// function shiftLeftArray(arrLength, leftShiftCount, array) {
//   if (leftShiftCount === 0) console.log(array.join(' '));
//   else {
//     let newArr = [];
//     for (let i = 1; i < arrLength; i++) newArr.push(array[i]);
//     newArr.push(array[0]);
//     const nextLeftShiftCount = leftShiftCount - 1;
//     shiftLeftArray(arrLength, nextLeftShiftCount, newArr);
//   }
// }
// try 3
// function shiftLeftArray(arrLength, leftShiftCount, array) {
//   if (leftShiftCount === 0) console.log(array.join(' '));
//   else {
//     let newArr = array;
//     let leftArr = [];
//     if (arrLength > 1) {
//       leftArr = newArr.shift();
//       newArr.push(leftArr);
//     }
//     const nextLeftShiftCount = leftShiftCount - 1;
//     shiftLeftArray(arrLength, nextLeftShiftCount, newArr);
//   }
// }

// try 4
function shiftLeftArray(arrLength, leftShiftCount, array) {
  let newArr = [];
  for (let i = 0; i < arrLength; i++) {
    const position = (i + leftShiftCount) % arrLength;
    newArr.push(array[position]);
  }
  console.log(newArr.join(' '));
}

function main() {
  var n_temp = readLine().split(' ');
  var n = parseInt(n_temp[0]);
  var k = parseInt(n_temp[1]);
  a = readLine().split(' ');
  a = a.map(Number);

  // n: number of array, k: left shift count, a: array
  validateParams(n, k, a);
  shiftLeftArray(n, k, a);
}
