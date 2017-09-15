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
function validateStr(str) {
  const length = str.length;
  assert(length >= 1 && length <= Math.pow(10, 4), 'number of string is invalid');
  assert(str.match(/[^a-z]/g) === null, 'string contains uppercase');
}
function getStrCountArr(str) {
  let asciiTable = {};
  for (let i = 97; i <= 122; i++) asciiTable[i] = 0;
  [...str].map((char, index) => asciiTable[char.charCodeAt()]++);
  return asciiTable;
}
function countDeletion(firstStr, secondStr) {
  const firstCountObj = getStrCountArr(firstStr);
  const secondCountObj = getStrCountArr(secondStr);

  let count = 0;
  Object.keys(firstCountObj).map(key => count += Math.abs(firstCountObj[key] - secondCountObj[key]));

  console.log(count);
}

function main() {
  var a = readLine();
  var b = readLine();
  validateStr(a);
  validateStr(b);

  countDeletion(a, b);
}