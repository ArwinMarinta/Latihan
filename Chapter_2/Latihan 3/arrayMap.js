const numbers = [1, 2, 3, 4, 5];
const mutatedItems = numbers.map((i) => {
  return i + 1;
});

console.log(mutatedItems);

const students = [
  {
    name: "Putra",
    bornIn: 2003,
  },
  {
    name: "Andre",
    bornIn: 2002,
  },
];

//Menghitung umur setiap student
const yearNow = new Date().getFullYear();
const studentWithAge = students.map((students) => {
  const age = yearNow - students.bornIn;
  return {
    ...students, // ... nama nya rest parameter
    age,
  };
});

console.log(studentWithAge);

let student = {
  name: "Alvan",
  bornIn: 2002,
};

student = {
  ...student, // ... nama nya rest parameter
  age: 21,
};
console.log(student);
