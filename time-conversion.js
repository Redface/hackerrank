/**
 *
 * Created by REDFACE on 15. 10. 28..
 */

function getTimeInArray(timeAmPm) {
  // hh:mm:ssAM
  var timeAmPmArr = timeAmPm.split(":");

  var hh = timeAmPmArr[0];
  var mm = timeAmPmArr[1];
  var ssAMPM = timeAmPmArr[2];

  if (parseInt(hh, 10) < 01 || parseInt(hh, 10) > 12)
    throw new Error("hh must be between 01 and 12 for AM/PM format");
  if (ssAMPM === undefined)
    throw new Error("ssAMPM must not be undefined");

  var ss = ssAMPM.slice(0,2);
  var AMPM = ssAMPM.slice(2, 5);

  timeAmPmArr[0] = hh;
  timeAmPmArr[1] = mm;
  timeAmPmArr[2] = ss;
  timeAmPmArr.push(AMPM);

  return timeAmPmArr;
}
function get24hFormat(timeAmPmArr) {

  var hh = timeAmPmArr[0];
  var AMPM = timeAmPmArr[3];

  var hh24Format = hh;

  if (parseInt(hh, 10) === 12 && AMPM === "AM") {
    hh24Format = "00";
  }
  if (parseInt(hh, 10) !== 12 && AMPM === "PM") {
    hh24Format = (parseInt(hh, 10) + 12).toString();
  }

  timeAmPmArr.pop();
  timeAmPmArr[0] = hh24Format;

  var timeStr = timeAmPmArr.join(":");

  return timeStr;
}
function processData(input) {
  //Enter your code here
  var inputArrayByNewLine = input.split("\n");
  var timeAmPm = inputArrayByNewLine[0].trim();

  var timeAmPmArr = getTimeInArray(timeAmPm);
  var time24Format = get24hFormat(timeAmPmArr);
  console.log(time24Format);
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

