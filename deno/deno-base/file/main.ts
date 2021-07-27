
// 异步读取文件
const data = await Deno.readTextFile("./test.json");
console.log(data);
// 同步读取文件
const decoder = new TextDecoder("utf-8");
const dataSync = Deno.readFileSync("./test.json");
console.log(decoder.decode(dataSync));


// 异步写入文件
await Deno.writeTextFile("./hello.text", "hello deno")
// 同步写入文件
Deno.writeTextFileSync("./hello.text", "hello deno!!!")