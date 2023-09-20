// let variable mendeteksi  penggunaan variable yang sama atau tidak  boleh menggunakan variable yang
// sama dalam membuat sebuah variable

// scope
let diskon = 500;
if (true) {
  let diskon = 300;
  console.log("Diskon: ", diskon);
}
console.log("Diskon: ", diskon);

// reassign & declarasi
let name;
console.log("Name: ", name);
name = "bot";
console.log("Name", name);

// Ketika fungsi di bawah dan di atas di jalankan secara bersamaan akan menghasilkan error
// karena terdapat nama variable dengan nama yang sama

// let name = "Mentor";
// console.log("Name: ", name);
