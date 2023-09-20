const arwin = {
  name: "Arwin",
  address: {
    city: "Balikpapan",
    province: "Kalimantan Timur",
  },
};

console.log(arwin);

//Menambahkan object
arwin.job = "Student";
console.log(arwin);

const arwinDetail = `${arwin.name} is from ${arwin.address.city}, ${arwin.address.province}`;
console.log(arwinDetail);
