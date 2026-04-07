function isPalindrome(n) {
    var original = n;
    var reverse = 0;

    while (n > 0) {
        var digit = n % 10;
        reverse = (reverse * 10) + digit;
        n = Math.floor(n / 10);
    }

    if (original == reverse) return true;
    else return false;
}

var N = parseInt(prompt("N"));
var K = parseInt(prompt("K"));

var answer = -1;

for (var i = 0; i < 10000; i++) {
    var value = N + i;

    if (value % K == 0 && isPalindrome(value)) {
        answer = i;
        break;
    }
}

alert(answer);