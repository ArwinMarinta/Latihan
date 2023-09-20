const yearNow = new Date().getFullYear();

const students = [
  {
    name: "Putra",
    bornIn: 2003,
    getAge: function () {
      return yearNow - this.bornIn;
    },
  },
  {
    name: "Andre",
    bornIn: 2002,
    getAge: function () {
      return yearNow - this.bornIn;
    },
  },
];

console.log("Umur: ", students[0].getAge());
console.log("Umur: ", students[1].getAge());

const studentWithAge = students.map((student) => {
  const age = student.getAge();
  return Object.assign(student, { age });
});

console.log(studentWithAge);
