//var bisa satu variabel untuk banyak class, dan jarang di gunakan sekarang

var price;
price = 1000;
console.log("price : ", price);

var price = 2000;
console.log("price: ", price);

//  scope
var diskon = 500; //global variable
if (true) {
  var diskon = 300;
}

console.log("Diskon: ", diskon);

function localDiskon() {
  var diskon = 200; //Local Variable
  console.log("Diskon: ", diskon);
}

localDiskon();

console.log("Diskon: ", diskon);
