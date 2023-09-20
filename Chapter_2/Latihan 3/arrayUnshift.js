//array Unshift digunakan untuk menambah iitem di depan array

const fruits = ["apple", "Orange", "Durian"];
fruits.unshift("Tomato"); //Menambahkan item kedalam array paling belakang
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

students.unshift({
  name: "Guntur",
  class: "FEJS-3",
});

console.log(students);
