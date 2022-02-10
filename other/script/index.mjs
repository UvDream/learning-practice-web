#!/usr/bin/env zx
// let q1 = await question("我帅吗");
// console.log(q1);
// let q2 = await question("我需要获取你的参数", {
//   choices: Object.keys(process.env),
// });
// console.log(q2);
// console.log(chalk.blue("Hello world!"));
// console.log(YAML.parse("foo: bar").foo);
// let content = await fs.readFile("./package.json");
// console.log(content);
let packages = await globby(["package.json", "packages/*/package.json"]);

// let pictures = globby.globbySync('content/*.(jpg|png)')
console.log(packages);
