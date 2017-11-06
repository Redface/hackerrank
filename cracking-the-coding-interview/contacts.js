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

class ContactObj {

  constructor() {
    this.contactObject = {};
    this.validateNameDuplication = (trueCount) => {
      assert(trueCount !== 0, 'duplicated word');
    }
  }

  add(word) {
    let increamentCount = 0;
    for (let i = 1; i < word.length + 1; i++) {
      const el = word.substring(0, i);
      const prevCount = this.contactObject[el];
      this.contactObject[el] = this.contactObject[el] ? this.contactObject[el] + 1 : 1;

      if (prevCount !== this.contactObject[el]) increamentCount++;
    }
    this.validateNameDuplication(increamentCount);
  }

  find(word) {
    const count = this.contactObject[word];
    return this.contactObject[word] ? count : 0;
  }

}

function main() {

  var n = parseInt(readLine());
  const contactObj = new ContactObj();

  for (var a0 = 0; a0 < n; a0++) {
    var op_temp = readLine().split(' ');
    var op = op_temp[0]; // operation
    var contact = op_temp[1]; // letters

    validateOp(op);
    validateContact(contact);

    if (op === ADD) contactObj.add(contact);
    else if (op === FIND) console.log(contactObj.find(contact));
  }
}


// another solution with node/link
class Node {

  constructor() {
    this.amount = 0;
    this.letter = '';
    this.nodes = {};
  }

  increaseCount() {
    this.amount = this.amount + 1;
  }

  link(letter, node) {
    this.nodes[letter] = node;
  }

  find(word) {
    let currentWords = null;
    let searchObject = this.nodes;
    for (let i = 0; i < word.length; i++) {
      const el = word.charAt(i);
      if (searchObject[el]) {
        currentWords = searchObject[el].amount;
        searchObject = searchObject[el].nodes;
      } else {
        currentWords = 0;
        break;
      }
    }
    if (currentWords !== null) console.log(currentWords);
  }

  add(word) {
    let searchObject = this;
    for (let i = 0; i < word.length; i++) {
      const el = word.charAt(i);
      if (!searchObject.nodes[el]) searchObject.link(el, new Node());
      searchObject.nodes[el].increaseCount();
      searchObject = searchObject.nodes[el];
    }
  }
}
