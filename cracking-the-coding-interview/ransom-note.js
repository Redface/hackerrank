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

function validate(words, count) {

  // words check
  assert(words.length === count, 'number of words is different');
  assert(count >= 1 && count <= 30000, 'range of count is wrong');

  // word check
  const re = /[^a-zA-Z]/g;
  words.forEach(word => {
    const length = word.length;
    assert(word.match(re) === null, 'word is invalid'); // alphabet
    assert(length >= 1 && length <= 5, 'length of word is invalid');
  });
}
function getWordsTable(magazine) {
  let table = {};
  magazine.map(word => table[word] = table[word] === void 0 ? 1 : table[word] + 1);
  return table;
}
function isReplicable(magazine, ransom) {
  let wordsTable = getWordsTable(magazine);
  const isReplicable = ransom.filter(word => {
    if (wordsTable[word] === void 0 || wordsTable[word] <= 0) return word;
    else wordsTable[word] = wordsTable[word] - 1;
  }).length === 0 ? 'Yes' : 'No';
  console.log(isReplicable);
}
function main() {
  var m_temp = readLine().split(' ');
  var m = parseInt(m_temp[0]);
  var n = parseInt(m_temp[1]);
  magazine = readLine().split(' ');
  ransom = readLine().split(' ');
  isReplicable(magazine, ransom);
}
