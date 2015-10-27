/**
 * Created by 1000735 on 10/27/15.
 */
function processData(input) {
  //Enter your code here
  var inputArrayByNewLine = input.split("\n");
  var howmanyCount = parseInt(inputArrayByNewLine[0].trim(), 10);
  var denominator = howmanyCount;

  var numberList = [];
  if (inputArrayByNewLine[1] !== undefined) {
    numberList = inputArrayByNewLine[1].split(" ");
  }

  if (howmanyCount > 100 || howmanyCount < 1)
    throw new Error("Array size is out of between 1 and 1000");

  var positiveNumbers = 0, negativeNumbers = 0, zeroNumbers = 0;
  for (var index = 0; index < howmanyCount; index ++) {
    var number = parseInt(numberList[index], 10);
    if (number < -100 || number > 100)
      throw new Error("Number is out of between -100 and 100");

    if (number > 0) {
      positiveNumbers++;
    } else if (number < 0) {
      negativeNumbers++;
    } else if (number === 0) {
      zeroNumbers++;
    }
  }

  var positiveFraction = positiveNumbers / denominator;
  var negativeFraction = negativeNumbers / denominator;
  var zeroFraction = zeroNumbers / denominator;

  console.log(positiveFraction);
  console.log(negativeFraction);
  console.log(zeroFraction);
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