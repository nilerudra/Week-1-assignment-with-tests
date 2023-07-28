let hh = 0;
let mm = 0;
let ss = 0;

setInterval(() => {
  console.clear();
  ss++;
  if (ss === 60) {
    ss = 0;
    mm++;
  }
  if (mm === 60) {
    mm = 0;
    hh++;
  }
  if (hh === 24) {
    hh = 0;
  }
  console.log(padZero(hh) + " : " + padZero(mm) + " : " + padZero(ss));
}, 1000);

function padZero(num) {
  return num.toString().padStart(2, "0");
}
