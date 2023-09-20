let trueBool = true;
let falseBool = false;

let test = 1 > 2;
console.log(test);

// AND logic akan mengambil nilai nilai false pertama
// Jika Semua nya True maka, dia akan mengambil nilai true yang terakhir
let a = 1;
let b = 2;
const c = 1 && 2 && true && " berhasil";
console.log("C: ", c);

//OR logic mengambil nilai True yang pertama kali, dan jika false semua maka hasil nya false
//OR logic
let d = 1;
const e = d || 5 || false || true;
const f = false || false || false || "" || true || 8;

console.log("e: ", e);
console.log("f: ", f);

// perbedaan ternary dengan if biasa
//Normal IF
let newBool;
if (trueBool) {
  newBool = 1;
} else {
  newBool = 0;
}
console.log("new bool: ", newBool);

//Ternary
newBool = trueBool ? 1 : 0;
console.log("new bool: ", newBool);
