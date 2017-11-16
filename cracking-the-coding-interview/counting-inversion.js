// incompleted
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
let count = 0;
function merge(leftArr, rightArr) {
  let leftIndex = 0;
  let leftEnd = leftArr.length - 1;
  let rightIndex = 0;
  let rightEnd = rightArr.length - 1;

  let tmp = [];
  while (leftIndex <= leftEnd && rightIndex <= rightEnd) {
    if (leftArr[leftIndex] > rightArr[rightIndex]) {
      tmp.push(rightArr[rightIndex]);
      rightIndex++;
      count++;
    } else if (leftArr[leftIndex] < rightArr[rightIndex]) {
      tmp.push(leftArr[leftIndex]);
      leftIndex++;
    } else {
      tmp.push(rightArr[rightIndex]);
      tmp.push(leftArr[leftIndex]);
      rightIndex++;
      leftIndex++;
    }
  }
  while (leftIndex <= leftEnd) {
    tmp.push(leftArr[leftIndex]);
    leftIndex++;
  }
  while (rightIndex <= rightEnd) {
    tmp.push(rightArr[rightIndex]);
    rightIndex++;
  }
  return tmp;
}
function mergeSort(arr) {
  if (arr.length < 2) return arr;

  const middle = parseInt(arr.length / 2);
  const leftArr = arr.slice(0, middle);
  const rightArr = arr.slice(middle, arr.length);

  return merge(mergeSort(leftArr), mergeSort(rightArr));

}

function main() {
  var t = parseInt(readLine());
  for (var a0 = 0; a0 < t; a0++) {
    var n = parseInt(readLine());
    let arr = readLine().split(' ');
    arr = arr.map(Number);
    var result = mergeSort(arr);
    process.stdout.write("" + result + "\n");
    count = 0;
  }
}
