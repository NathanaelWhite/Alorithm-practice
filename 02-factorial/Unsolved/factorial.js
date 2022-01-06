// Write code to create a function that returns the factorial of `num`

var factorial = function(num) {
    let results = 1;
    for (var i = num; i > 1; i--) {
        results = results * i;
    }
    return results
};
