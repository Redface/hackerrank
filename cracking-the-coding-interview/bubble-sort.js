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

class BubbleSort {

  constructor(arr) {
    this.arr = arr;
    this.numberOfSwaps = 0;

  }

  sortByAsc() {
    for (let i = 0, length = this.arr.length; i < length; i++) {
      for (let j = i + 1; j < length; j++) {
        if (this.arr[i] > this.arr[j]) {
          const tmp = this.arr[i];
          this.arr[i] = this.arr[j];
          this.arr[j] = tmp;
          this.numberOfSwaps++;
        }
      }
    }
  }

  getFirstEl() {
    return this.arr[0];
  }

  getLastEl() {
    return this.arr[this.arr.length - 1];
  }

  getNumberOfSwaps() {
    return this.numberOfSwaps
  };

}

function main() {
  var n = parseInt(readLine());
  a = readLine().split(' ');
  a = a.map(Number);

  const arrObj = new BubbleSort(a);
  arrObj.sortByAsc();
  console.log(`Array is sorted in ${arrObj.getNumberOfSwaps()} swaps.`)
  console.log(`First Element: ${arrObj.getFirstEl()}`);
  console.log(`Last Element: ${arrObj.getLastEl()}`);
}