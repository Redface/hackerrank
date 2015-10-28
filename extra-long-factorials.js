/**
 *
 * Created by 1000735 on 10/28/15.
 */

function getFactorial(number) {

  if (number === 1) return 1;
  else {
    return number * getFactorial(number - 1);
  }
}
function processData(input) {
  //Enter your code here
  var inputArrayByNewLine = input.split("\n");
  var number = parseInt(inputArrayByNewLine[0].trim(), 10);

  if (number > 100 || number < 1)
    throw new Error("Range error");

  var result = getFactorial(number);

  if (result.toString().match(/e/)) {
  }
  console.log(result.split("e"));
  console.log(result.toLocaleString().split(",").join(""));
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