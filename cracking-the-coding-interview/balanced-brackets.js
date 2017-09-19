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
function validateNumberOfInputLines(numberOfLines) {
  assert(1 <= numberOfLines && numberOfLines <= Math.pow(10, 3), 'number of input lines exceeded');
}
function validateBrackets(expression) {
  const length = expression.length;
  const violationCheckReg = /[^{}[\](\)]/g;
  assert(1 <= length && length <= Math.pow(10, 3), 'length is exceeded');
  assert(expression.match(violationCheckReg) === null || expression.match(violationCheckReg).length === 0, 'only {}()[] allowed');
}
function isBalancedBrackets(expression) {
  const expArr = expression.split('');
  let leftHalf = [], rightHalf = [], matchTable = { '(': ')', '[': ']', '{': '}' };
  let isBalanced;
  if (expArr.length % 2 !== 0) isBalanced = 'NO';

  for (let i = 0, length = expArr.length; i < length; i++) {
    const char = expArr.pop();
    if (i < length / 2) rightHalf.push(char);
    else leftHalf.push(char);
  }
  console.log(leftHalf, rightHalf);
  for (let i = 0, length = leftHalf.length; i < length; i++) {
    console.log(leftHalf[i], rightHalf[length -i -1])
    if (matchTable[leftHalf[i]] === rightHalf[length - i -1]) {
      isBalanced = 'YES';
    } else {
      isBalanced = 'NO';
      break;
    }
  }
  console.log(isBalanced);
}
function main() {
  //var t = parseInt(readLine());
  //for(var a0 = 0; a0 < t; a0++){
  //    var expression = readLine();
  //    validateBrackets(expression);
  //    isBalancedBrackets(expression);
  //}
  //validateNumberOfInputLines(t);

  const expression='[]()([{}])[]{}[]' 
  validateBrackets(expression);
  isBalancedBrackets(expression);
}

