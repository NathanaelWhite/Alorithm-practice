// Write code that returns true if `str` is a palindrome, and false if `str` is not a palindrome

var isPalindrome = function(str) {
    var newString = str.split("").reverse().join("");

    if (newString === str) {
        return true
    } else {
        return false
    }
};
