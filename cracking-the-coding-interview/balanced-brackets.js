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
  validateBrackets(expression);

  let stack = [];
  for (let char of expression) {

    const length = stack.length;

    if (char === '(') stack.push(')');
    else if (char === '[') stack.push(']');
    else if (char === '{') stack.push('}');
    else {
      if (length === 0 || char !== stack.pop()) return 'NO';
    }
  }
  return stack.length === 0 ? 'YES' : 'NO';
}
function main() {
  var t = parseInt(readLine());
  for (var a0 = 0; a0 < t; a0++) {
    var expression = readLine();
    console.log(isBalancedBrackets(expression));
  }
  validateNumberOfInputLines(t);

}

