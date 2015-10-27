/**
 * Created by 1000735 on 10/27/15.
 */
function processData(input) {
  var inputArrayByNewLine = input.split("\n");
  var howmanyCount = parseInt(inputArrayByNewLine[0].trim(), 10);

  var numberList = [];
  if (inputArrayByNewLine[1] !== undefined) {
    numberList = inputArrayByNewLine[1].split(" ");
  }

  if (howmanyCount > 1000 || howmanyCount < 1)
    throw new Error("Array size is out of between 1 and 1000");

  var sumOfEachNumber = 0;
  for (var index = 0; index < howmanyCount; index ++) {
    var number = parseInt(numberList[index], 10);
    if (number < 0 || number > 1000)
      throw new Error("Number is out of between 0 and 1000");

    sumOfEachNumber += number;
  }
  console.log(sumOfEachNumber);
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
