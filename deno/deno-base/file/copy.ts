// 拷贝文件
// 异步
await Deno.copyFile("./test.json", "copy_test.txt");
// 同步
Deno.copyFileSync("./test.json", "copy_test.txt")