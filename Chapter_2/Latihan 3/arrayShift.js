//array shift digunakan untuk menghapus index di depan array

const fruits = ["apple", "Orange", "Durian"];
fruits.push("Tomato"); //Menambahkan item kedalam array paling belakang
console.log(fruits);

const students = [
  {
    name: "Fatwa",
    class: "FEJS-3",
  },

  {
    name: "Billiam",
    class: "FEJS-3",
  },
];

students.shift();
console.log(students);
