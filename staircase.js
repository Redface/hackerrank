/**
 *
 * Created by REDFACE on 15. 10. 27..
 */
function printStair(count, maxCount) {

  if (count === 0) return;
  else {
    printStair(--count, maxCount);
  }
  var str = "";
  for (var index = 1; index <= maxCount; index++) {
    if (index < (maxCount - count)) {
      str += " ";
    } else {
      str += "#";
    }
  }
  return console.log(str);
}
function processData(input) {
  var inputArrayByNewLine = input.split("\n");
  var howmanyCount = parseInt(inputArrayByNewLine[0].trim(), 10);

  printStair(howmanyCount, howmanyCount);
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