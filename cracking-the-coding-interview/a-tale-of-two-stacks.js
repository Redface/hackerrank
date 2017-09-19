const assert = require('assert');
const FIRST_INDEX = 0;
let queue = [];

function validateNumberOfQueue(numberOfQueue) {
  assert(1 <= numberOfQueue && numberOfQueue <= Math.pow(10, 5), 'number of queue exceeded');
}
function validateVal(val) {
  assert(1 <= val && val <= Math.pow(10, 9), `value is out of range : ${val}`);
}
function enqueue(val) {
  validateVal(val);
  queue.push(val);
}
function dequeue() {
  queue.shift();
}
function printFrontOfQueue() {
  if (queue.length > 0) console.log(queue[FIRST_INDEX]);
}
function processQueue(input) {
  const [ queueType, val ] = input.split(' ');
  switch (queueType) {
    case "1":
      enqueue(val);
      break;
    case "2":
      dequeue();
      break;
    case "3":
      printFrontOfQueue();
      break;
    default:
      return;
  }
}

function processData(input) {
  //Enter your code here
  const [length, ...data] = input.split('\n');
  validateNumberOfQueue(length);
  for (let i = 0; i < length; i++) {
    processQueue(data[i]);
  }
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
  _input += input;
});

process.stdin.on("end", function () {
  processData(_input);
});