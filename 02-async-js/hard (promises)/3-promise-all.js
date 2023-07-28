/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Print how long it took for all 3 promises to resolve.
 */

let start;
let end;
function waitOneSecond(s) {
  return new Promise((resolve) => setTimeout(resolve, s));
}

function waitTwoSecond(s) {
  return new Promise((resolve) => setTimeout(resolve, s));
}

function waitThreeSecond(s) {
  return new Promise((resolve) => setTimeout(resolve, s));
}

function calculateTime() {
  start = performance.now();
  const arr = [waitOneSecond(1000), waitTwoSecond(2000), waitThreeSecond(3000)];

  Promise.all(arr).then(() => {
    end = performance.now();

    let timeTaken = end - start;
    console.log("Time Taken By a Function To Calculate is : " + timeTaken);
  });
}

calculateTime();
