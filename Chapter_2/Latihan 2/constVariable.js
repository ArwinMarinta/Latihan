/* const hampir mirip dengan let
    const tidak dapat di reasiggn dan  redeclarated
    const hanya bisa di tambah dan kurangin
    const bisa untuk array dan object namun tidak bisa di reassign 
*/

// scope
const diskon = 500; //Global variable
if (true) {
  const diskon = 300; //local variable
  console.log("Diskon: ", diskon);
}
console.log("Diskon: ", diskon);

//reasign and redeclared

const earth = "bulat";
// earth = "Datar";
// const earth = "data";

const object = { id: 1, name: "reza" };
object.location = "Yogyakarta";
console.log("Object: ", object);
// const object = {} //error

const array = [1, 2, 3, 4];
array.push(5);
console.log("Array: ", array);
// const array = [];
