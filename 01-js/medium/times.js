/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
*/

function calculateTime(n) 
{
    var ans = 0;
    for(let i = 0; i <= n; i++)
    {
        ans += i;
    }
    return ans;
}
let start = performance.now();

var result = calculateTime(1000000000)

let end = performance.now();

let timeTaken = end - start;
console.log("Time Taken By a Function To Calculate is : " + timeTaken)