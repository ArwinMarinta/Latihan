const { error } = require("console");
const fs = require("fs");

console.log("Star.....");
fs.readFile("./Data/Data.json", "utf-8", (error, data) => {
  if (error) {
    return error;
  }
  console.log(data);

  fs.readFile("./Data/try.json", "utf-8", (error, data) => {
    if (error) {
      return error;
    }

    console.log(data);
    console.log("end.......");
  });
});
