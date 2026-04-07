var base = parseInt(prompt("Base Fare"));
var distance = parseInt(prompt("Distance"));
var minutesLate = parseInt(prompt("Minutes Late"));
var seed = parseInt(prompt("Seed"));

var fare = base + (7*distance);

if (minutesLate > 15) {
    fare = fare + 20;
}

if (distance > 10) {
    fare = fare + Math.floor(fare * 0.01);
}

if (seed % 2 == 1) {
    fare = fare - seed;
} else {
    fare = fare + seed;
}

fare = Math.ceil(fare / 5) * 5;

alert(fare);