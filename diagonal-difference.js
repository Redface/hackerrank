/**
 * Created by 1000735 on 10/27/15.
 */
function isValid(number) {
  var isValid = false;
  if (number >= -100 && number <= 100)
    isValid = true;
  return isValid;
}
function getSumOfArray(array) {
  var sum;
  for (var index = 0; index < array.length; index++) {
    if (sum === undefined)
      sum = array[index];
    else
      sum += array[index];
  }
  return sum;
}
function processData(input) {
  var inputArrayByNewLine = input.split("\n");
  var matrixSize = parseInt(inputArrayByNewLine[0].trim(), 10);

  var matrixList = [];
  for (var index = 1; index < inputArrayByNewLine.length; index++) {
    if (inputArrayByNewLine[index] !== undefined && inputArrayByNewLine[index].length >= matrixSize) {
      matrixList.push(inputArrayByNewLine[index].split(" "));
    }
  }

  if (matrixSize > 100 || matrixSize < 1)
    throw new Error("Array size is out of between 1 and 1000");

  var leftToRight = [], rightToLeft = [];
  for (var index = 0; index < matrixSize; index ++) {
    var head = index,
      tail = matrixSize - 1 - head;

    var headNumber =  parseInt(matrixList[index][head], 10);
    var tailNumber =  parseInt(matrixList[index][tail], 10);
    if (isValid(headNumber))
      leftToRight.push(headNumber);
    if (isValid(tailNumber))
      rightToLeft.push(tailNumber);
  }

  var sumOfLeftToRight = getSumOfArray(leftToRight);
  var sumOfRightToLeft = getSumOfArray(rightToLeft);

  if (sumOfLeftToRight === undefined && sumOfRightToLeft === undefined) {
    throw new Error("Sum of Array must not be undefined");
  }

  var result = Math.abs(sumOfLeftToRight - sumOfRightToLeft);
  console.log(result);
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