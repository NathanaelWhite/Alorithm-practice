// Write code that returns true if `str` is a palindrome, and false if `str` is not a palindrome

var isPalindrome = function (str) {
  var newStr = str;

  var reverseStr = str.split("").reverse().join("");

  if (newStr === reverseStr) {
    return true;
  } else {
    return false;
  }
};
