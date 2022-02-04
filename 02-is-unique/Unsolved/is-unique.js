// Write code to create a function that accepts an array numbers
// Return `true` is no number appears in the array more than once, else return `false`

var isUnique = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let x = 0; i < arr.length; i++) {
      if (i !== x && arr[i] === arr[x]) {
        return false;
      }
    }
  }
  return true;
};
