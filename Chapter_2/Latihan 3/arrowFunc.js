const calculateCubeVolume = (length) => {
  return length ** 3;
};

const helloYou = (name) => {
  console.log(`${name} anak bogor`);
};

const aziz = helloYou("Dwi");
console.log("aziz: ", aziz);

const cubeVolume = calculateCubeVolume(11);
console.log("cube: ", cubeVolume);
