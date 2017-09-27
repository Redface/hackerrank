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

//validation
function validateNumberOfValue(numberOfValue) {
  assert(1 <= numberOfValue && numberOfValue <= Math.pow(10, 5), 'value is out of range');
}
function validateValue(val) {
  assert(0 <= val && val <= Math.pow(10, 5), 'value is out of range');
}

// heap sort
function swap(arr, firstIndex, secondIndex) {
  let targetArr = JSON.parse(JSON.stringify(arr));
  let tmp = targetArr[firstIndex];
  targetArr[firstIndex] = targetArr[secondIndex];
  targetArr[secondIndex] = tmp;
  return targetArr;
}
function getParentIndex(childIndex) {
  return Number.parseInt((childIndex - 1) / 2);
}
function getParent(arr, index) {
  return arr[getParentIndex(index)];
}
function hasParent(index) {
  return getParentIndex(index) >= 0;
}
function getPeek(arr) {
  return arr[0];
}
function getMaxPoll() {
  return maxHeap.pop();
}
function getMinPoll() {
  return minHeap.pop();
}

const MIN_HEAP = 'MIN_HEAP';
const MAX_HEAP = 'MAX_HEAP';
function heapifyUpMIN() {
  let targetArr = JSON.parse(JSON.stringify(minHeap));

  let index = targetArr.length - 1;
  while (hasParent(index) && getParent(targetArr, index) > targetArr[index]) {
    targetArr = swap(targetArr, getParentIndex(index), index);
    index = getParentIndex(index);
  }
  return targetArr;
}
function heapifyUpMAX() {
  let targetArr = JSON.parse(JSON.stringify(maxHeap));
  let index = targetArr.length - 1;
  while (hasParent(index) && getParent(index) < targetArr[index]) {
    targetArr = swap(targetArr, getParentIndex(index), index);
    index = getParentIndex(index);
  }
  return targetArr;
}
function insert(val) {
  if (maxHeap.length === 0 || val > getPeek(maxHeap)) {
    maxHeap.push(val);
    maxHeap = heapifyUpMAX();
  } else {
    minHeap.push(val);
    minHeap = heapifyUpMIN();
  }
  console.log('maxHeap', maxHeap);
  console.log('minHeap', minHeap);
}
function rebalance() {
  if (maxHeap.length - minHeap.length > 1) {
    minHeap.push(getMaxPoll());
    minHeap = heapifyUpMIN();
  } else  {
    maxHeap.push(getMinPoll());
    maxHeap = heapifyUpMAX();
  }
}

// Median
function getMedian() {
  let val;
  if (maxHeap.length === minHeap.length) val = Number.parseFloat((getPeek(minHeap) + getPeek(maxHeap)) / 2).toFixed(1);
  else if (maxHeap.length > minHeap.length) val = Number.parseFloat(getPeek(maxHeap)).toFixed(1);
  else val = Number.parseFloat(getPeek(minHeap)).toFixed(1);

  console.log(val);
  return val;
}

var maxHeap = [];
var minHeap = [];
function main() {
  var n = parseInt(readLine());
  var a = [];
  //validateNumberOfValue(n);
  //for (var a_i = 0; a_i < n; a_i++) {
  //  a[a_i] = parseInt(readLine());
  //  validateValue(a[a_i]);
  //  insert(a[a_i]);
  //}
  var validationArr = [94455.0, 57505.0, 20555.0, 36840.0, 53125.0, 36840.0];
  insert(94455);
  rebalance();
  assert(getMedian() == 94455.0);

  insert(20555);
  rebalance();
  assert(getMedian() == 57505.0);

  insert(20535);
  rebalance();
  assert(getMedian() == 20555.0);

  insert(53125);
  rebalance();
  assert(getMedian() == 36840.0);

  insert(73634);
  rebalance();
  assert(getMedian() == 53125.0);

  insert(148);
  rebalance();
  assert(getMedian() == 36840.0);
}
