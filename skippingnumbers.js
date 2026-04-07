var N = parseInt(prompt("N"));
var K = parseInt(prompt("K"));

var m = 0;
var sum = 0;
var d = seed + 2;

while (sum < N) {
    m = m + 1;

    if (m % d != 0) {
        sum = sum + m;
    }
}

alert(m + " " + sum);