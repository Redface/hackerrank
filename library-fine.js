/**
 * Created by 1000735 on 10/28/15.
 */

function getDateFormat(dateArr) {
  var year = parseInt(dateArr[2], 10);
  var month = parseInt(dateArr[1], 10);
  var day = parseInt(dateArr[0], 10);

  if (year > 3000 || year < 1)
    throw new Error("Year range error");
  if (month > 12 || month < 1)
    throw new Error("Month range error");
  if (day > 31 || day < 1)
    throw new Error("day range error");

  //return new Date(year, month, day);
  return {year: year, month: month, day: day};
}
function processData(input) {
  //Enter your code here
  var inputArrayByNewLine = input.split("\n");
  var returnDateArr = inputArrayByNewLine[0].split(" ");
  var dueDateArr = inputArrayByNewLine[1].split(" ");

  var returnDate = getDateFormat(returnDateArr);
  var dueDate = getDateFormat(dueDateArr);

  var charge = 0;

  if (returnDate.year === dueDate.year &&
    returnDate.month === dueDate.month &&
    returnDate.day > dueDate.day) {
    var diffDays = Math.abs(returnDate.day - dueDate.day);
    charge = 15 * diffDays;
  }
  if (returnDate.year === dueDate.year &&
    returnDate.month > dueDate.month) {
    var diffMonths = Math.abs(returnDate.month - dueDate.month);
    charge = 500 * diffMonths;
  }
  if (returnDate.year > dueDate.year) {
    charge = 10000;
  }
  console.log(charge);
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