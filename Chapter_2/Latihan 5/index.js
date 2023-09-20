import chalk from "chalk";
import os from "os";
import fs from "fs";
import { calculateTriangleArea, calculateTriangleAround, arwin } from "./module/calculateTriangle.js";

console.log(chalk.blue("I am Arwin Marinta"));
console.log(chalk.green("I am Arwin Marinta"));
console.log(chalk.red("I am Arwin Marinta"));
console.log(chalk.white("I am Arwin Marinta"));

const freeMemory = os.freemem() / 1024 / 1024;
const totalMemory = os.totalmem() / 1024 / 1024;
console.log("free memory (MB): ", freeMemory);
console.log("total memory (MB): ", totalMemory);

// const exampleFile = fs.readFileSync("   ")

const triangleArea = calculateTriangleArea(15, 20);
console.log("Nilai: ", triangleArea);
const triangleAround = calculateTriangleAround(10);
console.log("Nilai: ", triangleAround);

console.log(arwin);
