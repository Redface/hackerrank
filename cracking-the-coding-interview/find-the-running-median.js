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
function validateNumberOfValue(numberOfValue) {
  assert(1 <= numberOfValue && numberOfValue <= Math.pow(10, 5), 'value is out of range');
}
function validateValue(val) {
  assert(0 <= val && val <= Math.pow(10, 5), 'value is out of range');
}

function isOddLength(arr) {
  return arr.length % 2 !== 0;
}
function getIndex(length) {
  return Number.parseInt((((length + 1) / 2) - 1));
}

function getOddMedian(arr) {
  return arr[getIndex(arr.length)];
}
function getEvenMedian(arr) {
  const medianIndex = getIndex(arr.length);
  const beforeMedianIndex = medianIndex, afterMedianIndex = medianIndex + 1;
  return (arr[beforeMedianIndex] + arr[afterMedianIndex]) / 2;
}

function swap(arr, firstIndex, secondIndex) {
  let targetArr = JSON.parse(JSON.stringify(arr));
  let tmp = targetArr[firstIndex];
  targetArr[firstIndex] = targetArr[secondIndex];
  targetArr[secondIndex] = tmp;
  return targetArr;
}
function heapify(arr, n, i) {
  let largest = i; // init as root
  const leftChild = 2 * i + 1, rightChild = 2 * i + 2;
  let targetArr = JSON.parse(JSON.stringify(arr));

  if (leftChild < n && arr[leftChild] > arr[largest]) largest = leftChild;
  if (rightChild < n && arr[rightChild] > arr[largest]) largest = rightChild;

  if (largest !== i) {
    targetArr = swap(targetArr, i, largest);
    targetArr = heapify(targetArr, n, largest);
  }

  return targetArr;

}
function heapSort(arr, n) {
  let targetArr = JSON.parse(JSON.stringify(arr));
  for(let i = 0; i < n; i++) targetArr = heapify(targetArr, n, i);

  for(let i = n - 1; i >= 0; i--) {
    const FIRST = 0, LAST = i;
    targetArr = swap(targetArr, FIRST, LAST);
    targetArr = heapify(targetArr, i, 0);
  }
  return targetArr;
}

function getMedian(arr) {
  const sortedArr = heapSort(arr);
  if (isOddLength(sortedArr)) return Number.parseFloat(getOddMedian(sortedArr)).toFixed(1);
  else return Number.parseFloat(getEvenMedian(sortedArr)).toFixed(1);
}

function main() {
  var n = parseInt(readLine());
  var a = [];
  validateNumberOfValue(n);
  for (var a_i = 0; a_i < n; a_i++) {
    a[a_i] = parseInt(readLine());
    validateValue(a[a_i]);
    console.log(getMedian(a));
  }
}