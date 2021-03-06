// Write code to create a function that accepts an array of numbers, finds the largest two numbers, and returns the product of the two

var productOfLargestTwo = function(arr) {
    var largest = null;
    var secLargest = null;

    for (let i = 0; i < arr.length; i++) {
        let currentNum = arr[i];

        if (currentNum > largest || largest === null) {
            secLargest = largest;
            largest = currentNum;
        } else if (currentNum > secLargest || secLargest === null) {
            secLargest = currentNum;
        }
    }
    return largest * secLargest;
};