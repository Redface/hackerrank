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
function countDeletion(firstStr, secondStr) {
  const firstLength = firstStr.length, secondLength = secondStr.length;
  let loopStr, targetStr;
  if (firstLength > secondLength) {
    loopStr = firstStr;
    targetStr = secondStr;
  } else {
    loopStr = secondStr;
    targetStr = firstStr;
  }
  let count = 0;
  let i = 0, j = 0;
  let loopLength = loopStr.length;
  let targetLength = targetStr.length;
  do {

    const index = loopStr.indexOf(targetStr[j], i);

    if (index !== -1) i++;
    else count = count + 1;
    j++;

    console.log(i,j)
  } while (i < loopLength && j < targetLength);
  count = count + (loopLength - i) + (targetLength - j);
  console.log(loopLength - i)
  console.log(targetLength - j)
  console.log(count);
}
function main() {
  // var a = readLine();
  // var b = readLine();
  var a = 'aaaa';
  var b = 'abba';
  validateStr(a);
  validateStr(b);


  countDeletion(a, b);
}