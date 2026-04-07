let L = parseInt(prompt("L"));
let R = parseInt(prompt("R"));
let K = parseInt(prompt("K"));

let count = 0;

function isPrime(n) {

    if (n < 2) return false;

    for (var i = 2; i <= n - 1; i++) {
        if (n % i == 0) {
            return false;
        }
    }
    return true;
}

for (let i = L; i <= R; i++) {
    if (i % K !== 0) continue;
    
    let num = i;
    let sum = 0;
    let hasZero = false;

    while (num > 0) {
        let digit = num % 10;
        if (digit == 0) {
            hasZero = true;
            break;
        }
        sum += digit;
        num = Math.floor(num / 10);
    }

    if (hasZero== false && isPrime(sum)) {
        count = count + 1;
    }
}

alert(count);