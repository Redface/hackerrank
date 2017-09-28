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
function getLeftChild(arr, index) {
  return arr[getLeftChildIndex(index)];
}
function getRightChild(arr, index) {
  return arr[getRightChildIndex(index)];
}
function getLeftChildIndex(parentIndex) {
  return parentIndex * 2 + 1;
}
function getRightChildIndex(parentIndex) {
  return parentIndex * 2 + 2;
}
function hasLeftChild(arr, index) {
  return getLeftChildIndex(index) < arr.length;
}
function hasRightChild(arr, index) {
  return getRightChildIndex(index) < arr.length;
}
function hasParent(index) {
  return getParentIndex(index) >= 0;
}
function getPeek(arr) {
  return arr[0];
}
function getLast(arr) {
  return arr[arr.length - 1];
}
function getMaxPoll() {
  const removedVal = getPeek(maxHeap);
  console.log('max removedVal', removedVal);
  maxHeap[0] = getLast(maxHeap);
  maxHeap.pop();
  heapifyUpMAX();
  return removedVal;
}
function getMinPoll() {
  const removedVal = getPeek(minHeap);
  minHeap[0] = getLast(minHeap);
  minHeap.pop();
  heapifyUpMIN();
  return removedVal;
}
function minHeapInsert(val) {
  minHeap.push(val);
  heapifyUpMIN();
}
function maxHeapInsert(val) {
  maxHeap.push(val);
  heapifyUpMAX();
}

function heapifyUpMIN() {
  let lowest = minHeap.length - 1;
  let parentIndex = getParentIndex(lowest);
  while (hasParent(lowest) && getParent(minHeap, lowest) > minHeap[lowest]) {
    if (hasRightChild(minHeap, parentIndex)) {
      lowest = getLeftChild(minHeap, parentIndex) < getRightChild(minHeap, parentIndex) ? getLeftChildIndex(parentIndex) : getRightChildIndex(parentIndex);
    }
    minHeap = swap(minHeap, parentIndex, lowest);
    lowest = parentIndex;
  }
}
function heapifyUpMAX() {
  let largest = maxHeap.length - 1;
  let parentIndex = getParentIndex(largest);
  while (hasParent(largest) && getParent(maxHeap, largest) < maxHeap[largest]) {
    if (hasRightChild(maxHeap, parentIndex)) {
      largest = getLeftChild(maxHeap, parentIndex) > getRightChild(maxHeap, parentIndex) ? getLeftChildIndex(parentIndex) : getRightChildIndex(parentIndex);
    }
    maxHeap = swap(maxHeap, getParentIndex(largest), largest);
    largest = getParentIndex(largest);
  }
}
function insert(val) {
  if (maxHeap.length === 0 || val < getPeek(maxHeap)) {
    maxHeapInsert(val);
  } else {
    minHeapInsert(val);
  }
}
function rebalance() {
  const maxSize = maxHeap.length;
  const minSize = minHeap.length;

  if (maxSize - minSize >= 2) {
    minHeapInsert(getMaxPoll());
  } else if (minSize - maxSize >= 2) {
    maxHeapInsert(getMinPoll());
  }
  console.log('max', maxHeap);
  console.log('min', minHeap);
}

// Median
function getMedian() {
  const maxSize = maxHeap.length;
  const minSize = minHeap.length;

  let val;
  if (maxSize === minSize) val = Number.parseFloat((getPeek(minHeap) + getPeek(maxHeap)) / 2).toFixed(1);
  else if (maxSize > minSize) val = Number.parseFloat(getPeek(maxHeap)).toFixed(1);
  else val = Number.parseFloat(getPeek(minHeap)).toFixed(1);

  return val;
}

var maxHeap = [];
var minHeap = [];
function main() {
  var n = parseInt(readLine());
  var a = [];
  validateNumberOfValue(n);
  for (var a_i = 0; a_i < n; a_i++) {
    a[a_i] = parseInt(readLine());
    validateValue(a[a_i]);
    insert(a[a_i]);
    rebalance();
    console.log(getMedian());
  }
  //var validationArr = [94455.0, 57505.0, 20555.0, 36840.0, 53125.0, 36840.0];
  //insert(94455);
  //rebalance();
  //assert(getMedian() == 94455.0);

  //insert(20555);
  //rebalance();
  //assert(getMedian() == 57505.0);

  //insert(20535);
  //rebalance();
  //assert(getMedian() == 20555.0);

  //insert(53125);
  //rebalance();
  //assert(getMedian() == 36840.0);

  //insert(73634);
  //rebalance();
  //assert(getMedian() == 53125.0);

  //insert(148);
  //rebalance();
  //assert(getMedian() == 36840.0);
}
