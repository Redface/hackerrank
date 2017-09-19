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
  //const allowedChars = ['{','}','(',')', '[',']'];
  // const violationCheckReg = /[^{}()\[\]]/g;
  const violationCheckReg = /[{}[\](\)]/g;
  '{}'.match(violationCheckReg);
  assert(1 <= length && length <= Math.pow(10, 3), 'length is exceeded');
  console.log(expression.match(violationCheckReg));
  assert(expression.match(violationCheckReg) !== null or expression.match(violationCheckReg).length === expression.split('').length, 'only {}()[] allowed');
}
function isBalancedBrackets(expression) {
  const expArr = expression.split('');
  let leftHalf = [], rightHalf = [];
  let isBalanced;
  if (expArr.length % 2 !== 0) isBalanced = 'NO';

  for (let i = 0, length = expArr.length; i < length; i++) {
    if (i < length / 2) rightHalf.push(expArr.pop());
    else leftHalf.push(expArr.pop());
  }
  for (let i = 0, length = leftHalf.length; i < length / 2; i++) {
    if (leftHalf[i] === rightHalf[length - 1]) {
      isBalanced = 'NO';
      break;
    }
    else isBalanced = 'YES'
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

  const expression = '{[()]}@';
  validateBrackets(expression);
  isBalancedBrackets(expression);
}

