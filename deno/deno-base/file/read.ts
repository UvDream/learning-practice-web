
// 异步读取文件
const data = await Deno.readTextFile("./test.json");
console.log(data);
// 同步读取文件
const dataSync = Deno.readTextFileSync("./test.json");
console.log(dataSync);

// 异步读取文件
const decoder = new TextDecoder("utf-8");
const dataFile = await Deno.readFile("./test.json");
console.log(decoder.decode(dataFile));
// 同步读取文件
const decoder1 = new TextDecoder("utf-8");
const dataFileSync = Deno.readFileSync("./test.json");
console.log(decoder1.decode(dataFileSync));

