// still in process

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
const ADD = 'add', FIND = 'find';
function validateOp(op) {
  assert(op === ADD || op === FIND, 'operation must be either add or find');
}
function validateContact(contact) {
  const violationCheckReg = /[^a-z]/g;
  assert(contact.match(violationCheckReg) === null || contact.match(violationCheckReg).length === 0, 'only lower case alphabet allowed');

  const length = contact.length;
  assert(1 <= length && length <= 21, 'out of contact char range');
}

function validateNameDuplication(trueCount) {
  assert(trueCount !== 0, 'duplicated word');
}

function addName(contact) {
  let trueCount = 0;
  for (let i = 0, length = contact.length; i < length; i++) {
    const char = contact[i];
    if (!trees[i]) trees.push(Object.assign({}, alphabets));
    if (trees[i][char] === false) {
      trees[i][char] = true;
      trueCount++;
    }
  }
  validateNameDuplication(trueCount);
}

function isTrueCount(trees, contact, treeIndex, contactIndex) {
  if (j === 0 && trees[treeIndex][contact[contactIndex]]) return true;
  else if (contactIndex > 0 && (trees[treeIndex][contact[contactIndex - 1]] && trees[treeIndex][contact[contactIndex]])) return true;
  return false;
}
function printHowManyContains(contact) {
  const contactLength = contact.length;
  // for (let i = 0, length = trees.length; i < length; i++) {
  //   let trueCount = 0;
  //   for (let j = 0; j < contactLength; j++) {
  //     if (j === 0 && trees[i][contact[j]]) trueCount++;
  //     else if (j > 0 && (trees[i][contact[j - 1]] && trees[i][contact[j]])) trueCount++;
  //   }
  // }

  let i = 0, treeLength;
  do {
    let trueCount = 0;
    let j = 0;
    do {
      if (isTrueCount(trees, contact, i, j)) {
        trueCount++;
      } else {
        trueCount = 0;
        i = 0;
        j = 0
      }

      j++
    } while (j < contactLength);
    if (trueCount === contactLength) console.log(trueCount);
    i++;
  } while (i < treeLength)
}

var trees = [];
var alphabets = {};
function main() {
  for (let i = 97, length = 122; i <= length; i++) alphabets[String.fromCharCode(i)] = false;

  var n = parseInt(readLine());
  // for (let i = 0; i < n; i++) trees.push(Object.assign({}, alphabets));
  for (var a0 = 0; a0 < n; a0++) {
    var op_temp = readLine().split(' ');
    var op = op_temp[0]; // operation
    var contact = op_temp[1]; // letters

    validateOp(op);
    validateContact(contact);

    if (op === ADD) addName(contact);
    else if (op === FIND) printHowManyContains(contact);
  }
}