const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "demo.txt");

function cleaner(d) {
  var res = [];
  for (let i = 0; i < d.length; i++) {
    if (d[i] != "") {
      res.push(d[i]);
    }
  }
  return res.join(" ");
}

fs.readFile(filePath, (err, data) => {
  var res = cleaner(data.toString().split(" "));
  fs.writeFile(filePath, res, () => {
    console.log("File Cleaned Successfully");
  });
});
