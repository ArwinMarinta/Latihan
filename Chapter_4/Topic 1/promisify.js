const {promisify} = require("util");
const fs = require("fs");

const readFile = promisify(fs.readFile);

const readTryJSON = async ()=>{
    try{
        const starTime = performance.now();

        const [dataData, tryData] = await Promise.all([
            readFile("./Data/Data.json", "utf-8"),
            readFile("./Data/try.JSON", "utf-8")
        ])
        
    }
}
