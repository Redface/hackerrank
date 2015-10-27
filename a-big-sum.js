/**
 *
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
