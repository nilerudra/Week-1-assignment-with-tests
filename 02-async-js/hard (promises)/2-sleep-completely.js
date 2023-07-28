/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

function delay(s) {
  let start = Date.now();
  console.log(start);
  while (Date.now() - start < s) {}
  console.log(Date.now());
}

function main() {
  console.log("Start");
  delay(10000);
  console.log("AFTER 3 SECONDS");
  console.log("END");
}

main();
console.log("hrytty");
