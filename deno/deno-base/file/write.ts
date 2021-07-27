// 异步写入文件
await Deno.writeTextFile("./hello.text", "hello deno")
// 同步写入文件
Deno.writeTextFileSync("./hello.text", "hello deno!!!")