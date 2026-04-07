# JS-Assignment

Q1. Digit Gatekeeper

Approach:

Iterate through all numbers from L to R
Check if the number is divisible by K
Extract digits using a loop:
If any digit is 0, skip the number
Calculate the sum of digits
Check if the digit sum is a prime number
Count all such valid numbers

Complexity:

Time: O(N × D) (N = range size, D = number of digits)
Space: O(1)




Q2. Roll Seed Lock

Approach:

Start with the given number N
Repeat the process 3 times:
If the number is even → divide by 2 and add seed
If the number is odd → multiply by 3 and subtract seed
After 3 steps:
Check if the result is a 3-digit number
Extract the middle digit
Compare it with the seed

Complexity:

Time: O(1)
Space: O(1)

 
 
Q3. Mirror Corridor

Approach:

Try values of X from 0 to 100000
For each value:
Calculate N + X
Check:
If it is divisible by K
If it is a palindrome (reverse using a loop)
Return the first valid X, otherwise return -1

Complexity:

Time: O(100000 × D)
Space: O(1)



Q4. Fare Calculator

Approach:

Initialize fare as:
fare = base + 7 × distance
Apply conditions:
Add 20 if minutesLate > 15
Add 10% of fare if distance > 10
If seed is odd, subtract a value
Otherwise, add 3
Round the final fare up to the nearest multiple of 5

Complexity:

Time: O(1)
Space: O(1)



Q5. Skipping Numbers

Approach:

Start with m = 1
Keep adding numbers that are not divisible by (seed + 2)
Continue until the total sum is ≥ N
Output the value of m and the final sum

Complexity:

Time: O(m)
Space: O(1)


Q6. Contest Score Judge

Approach:

Calculate score using:
score = 3a + b − 2c
Apply rules:
If score < 0 → set score to 0
If total attempts (a + b + c > 50) → subtract 10
Determine result:
If score ≥ 60 → PASS
Otherwise → FAIL

Complexity:

Time: O(1)
Space: O(1)
